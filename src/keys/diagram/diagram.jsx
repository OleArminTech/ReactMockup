import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../redux/actions/actions'
import _ from 'lodash'
import vis from 'vis'
import equipment from '../../../res/data/equipment.json'
import connections from '../../../res/data/connections.json'
import connectionTypes from '../../../res/data/connectionTypes.json'
import '../../../styles/diagram.css'
import { initializeNetwork, populateNetwork, addNodes } from '../../scripts/vis/diagramNetworkFunctions'
import { NODE_COLOR_DEFAULT, NODE_COLOR_SELECTED, CLUSTER_NAME, SKID_NAME } from '../../elements/diagramConstants'

class Diagram extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      nodes: null,
      edges: null,
      data: null,
      options: null,
      network: null,
      nodesAdded: false,
      timeoutValues: [],
      selectedEquipment: {
        entities: {},
        numberOfSelected: 0
      },
      diagram: {
        skidCollapsed: false,
        skidShown: false,
        euipmentDetailShown: false,
        cluster: ''
        }
    }
  }

  changeView = (fitNodes) => {
    console.log("Fit")
    console.log(fitNodes)
    // Moves the camera to fit the supplied nodes
    this.state.network.fit({
      nodes: fitNodes,
      animation: true
    })
  }

  markSelectedNodes = () => {
    // Map through all selected equipment and set colors to marked
    let selectedNodes = []
    _.map(this.props.selectedEquipment.entities, node => {
      let updateNode = this.state.nodes.get(node)
      updateNode.color = NODE_COLOR_SELECTED
      selectedNodes.push(updateNode)
    })
    // Update everything to the network to make it visible
    this.state.nodes.update(selectedNodes)
  }

  markCluster = (color) => {
    console.log(this.props.diagram.cluster)
    this.state.network.clustering.updateClusteredNode(this.props.diagram.cluster, {
      color: color
    })
  }

  setNetworkListeners = () => {
    // On doubleclick, either select or unselect equipment node
    this.state.network.on("doubleClick", params => {
      // First check if a cluster is selected, different rules apply for clusters
      if(this.state.network.isCluster(params.nodes[0])){
        console.log("Cluster: " + params.nodes[0])

        // Get all nodes in the cluster
        let clusterNodes = this.state.network.getNodesInCluster(this.props.diagram.cluster)
        // Check if all nodes in the cluster are selected or not
        let clusterSelected = this.isAllNodesInClusterSelected(this.props.diagram.cluster)
        // Take action based on if the nodes are selected and or if the cluster is selected or not
        if(clusterSelected && this.props.diagram.clusterSelected){
          // All nodes are selected, and has previously been marked selected as a cluster
          // This means the user want to unselect with this doubleclick

          // To prevent overload on reducers and action creators we store IDs and update in one go
          let nodesToUnselect = []
          // Map trough all the nodes in the cluster and unselect them individually
          _.map(clusterNodes, node => {
            // Check if the node is selected, and unselect it
            if(_.includes(this.props.selectedEquipment.entities, node)){
              // Store node to be unselected, need to be array for the omit-function in reducer
              nodesToUnselect.push(node)
              // Get the node with the ID
              let selectedNode = this.state.nodes.get(node)
              // Change the color and update the network
              selectedNode.color = NODE_COLOR_DEFAULT
              this.state.nodes.update(selectedNode)
            }
          })
          // Update global store with nodes to be unselected
          this.props.actions.removeGroup(nodesToUnselect, _.size(nodesToUnselect))
          // Set unselected mark and update global store for the cluster
          this.markCluster(NODE_COLOR_DEFAULT)
          this.props.actions.selectCluster(false)
        } else if (clusterSelected && !this.props.diagram.clusterSelected){
          // All nodes are selected, but it's previously not been set
          // This should not happen, as there should be a check on clustering
          console.log("INFO: All nodes in cluster marked as selected, but not the cluster itself")
          console.log("INFO: Check clustering function for errors")
        } else if(!clusterSelected && this.props.diagram.clusterSelected){
          // Not all nodes are selected, but has been previously marked as selected as a cluster
          // This should not happen, as there should be a check on ComponentDidMount
          console.log("INFO: Not all nodes in cluster is marked as selected, but the cluster itself is")
          console.log("INFO: Check ComponentDidMount for errors")
        } else {
          // Not all nodes selected, and the cluster is not marked as selected either
          // This means all nodes, plus the cluster, should be marked as selected

          // To prevent overload on reducers and action creators we store IDs and update in one go
          let nodesToSelect = {}
          // Map trough all the nodes in the cluster and select them individually
          _.map(clusterNodes, node => {
            // Check if the node is allready selected, add it to selected if not
            if(!_.includes(this.props.selectedEquipment.entities, node)){
              // Store node to be selected, needs to be key: value pair for the reducer
              nodesToSelect = { ...nodesToSelect, [node]: node }
              // Get the node with the ID
              let selectedNode = this.state.nodes.get(node)
              // Change the color and update the network
              selectedNode.color = NODE_COLOR_SELECTED
              this.state.nodes.update(selectedNode)
            }
          })
          // Update global store with nodes to be selected
          this.props.actions.addGroup(nodesToSelect, _.size(nodesToSelect))
          // Set slection mark and update global store for the cluster
          this.markCluster(NODE_COLOR_SELECTED)
          this.props.actions.selectCluster(true)
        }
      } else {
        console.log("Node: " + params.nodes[0])
        // Save the selected node to perform updates
        let selectedNode = this.state.nodes.get(params.nodes[0])
        if(!_.includes(this.props.selectedEquipment.entities, selectedNode.id)){
          // If not allready selected, add the node to selected
          this.props.actions.addSelected(selectedNode.id)
          // Change color to signal it's selected
          selectedNode.color = NODE_COLOR_SELECTED
        }else{
          // If node is allready selected, remove it
          this.props.actions.removeSelected(selectedNode.id)
          // Change the color back to normal
          selectedNode.color = NODE_COLOR_DEFAULT
        }
        this.state.nodes.update(selectedNode)
      }
    })
  }

  networkSetup = () => {
    // Function to initialize and populate the network. Uses local state
    this.setState(initializeNetwork(this.state, this.refs.visNetwork))
    this.setState(populateNetwork(equipment, connections, connectionTypes, this.state))

    // Random function to test adding more nodes
    //this.setState(addNodes(this.state))

    // If cluster name is not set, set it here
    if(!this.props.diagram.cluster) this.props.actions.setCluster(CLUSTER_NAME)

    // Once network is stabilized, set listeners and mark potential selected equipment
    this.state.network.once("stabilizationIterationsDone", () => {
      // Wait 500ms and then set listeners
      this.state.timeoutValues.push(setTimeout(this.setNetworkListeners.bind(this), 500))
      // Wait 600ms and then change the view
      //this.state.timeoutValues.push(setTimeout(this.changeView.bind(this), 600, [100, 200, 300, 1000, 1700, 1800, 3600, 3700, 3800]))
      // If there are selected equipment, mark them
      if(this.props.selectedEquipment.numberOfSelected) this.markSelectedNodes()
      // Check if there was skid manipulation from a previous mount
      if(this.props.diagram.skidCollapsed && !this.state.diagram.skidCollapsed){
        // Skid marked as collapsed from previous mount, collapse it
        this.state.timeoutValues.push(setTimeout(this.collapseSkid.bind(this), 500))
        // Mark the cluster as selected if it was selected in the previous mount
        if(this.props.diagram.clusterSelected){
          console.log("Cluster allready selected, mark it")
          this.state.timeoutValues.push(setTimeout(this.markCluster.bind(this), 600, NODE_COLOR_SELECTED))
        }
      }
      if(this.props.diagram.skidShown && !this.state.diagram.skidShown){
        // Skid marked as shown from previous mount, show it
        this.state.timeoutValues.push(setTimeout(this.showSkid.bind(this), 500))
      }
    })
  }

  isAllNodesInClusterSelected = (cluster) => {
    // Get all the nodes in the cluster
    let clusterNodes = this.state.network.getNodesInCluster(cluster)
    let clusterSelected = true
    // Check if all cluster nodes are selected, if not make the value false
    _.map(clusterNodes, node => {
      if(!_.includes(this.props.selectedEquipment.entities, node)){
         clusterSelected = false
      }
    })
    return clusterSelected
  }

  getConnectedNodesFromCluster = (cluster) => {
    // Find the cluster nodes
    let clusterNodes = this.state.network.getNodesInCluster(cluster)
    // Return nodes directly connected to each node
    return this.getConnectedNodesFromGroup(clusterNodes)
  }

  getConnectedNodesFromSkid = (skid) => {
    skidNodes = this.getSkidNodeIds(skid)
     // Return the nodes connected to the skid nodes
    return this.getConnectedNodesFromGroup(skidNodes)
  }

  getConnectedNodesFromGroup = (nodes) => {
    let connectedNodes = []
    _.map(nodes, node => {
      // Add connected nodes to the array without duplicates
      connectedNodes = _.union(connectedNodes, this.state.network.getConnectedNodes(node))
    })
    // Remove the original nodes from the list, send only connected
    return _.difference(connectedNodes, nodes)
  }

  collapseSkid = () => {
    if(this.props.diagram.skidCollapsed){
      let clusterOptionsByData = {
        joinCondition:function(childOptions) {
            return childOptions.skid == SKID_NAME;
        },
        clusterNodeProperties: {id: this.props.diagram.cluster, label: SKID_NAME, shape:'box'}
      }
      this.state.network.cluster(clusterOptionsByData)
      // If all nodes in the skid is selected, select the cluster and mark it
      if(this.isAllNodesInClusterSelected(this.props.diagram.cluster)){
        this.markCluster(NODE_COLOR_SELECTED)
        // Set the cluster as selected if it isn't allready
        if(!this.props.diagram.clusterSelected) this.props.actions.selectCluster(true)
      } else {
        // If the nodes aren't all selected, check if the cluster is and unselect it if it is selected
        if(this.props.diagram.clusterSelected) this.props.actions.selectCluster(false)
      }
      /* Fit view to the cluster:
      * This was a bit fiddly, as the nodes are not technically there when clustered.
      * Also we can't use the cluster as a node for a view fit...
      * We need to get all nodes in the cluster, and then finding the connected nodes
      * for each node, store them in an array, and fit the view to these nodes.
      * In the end it works out for the better, as we get a better view of the cluster
      */

      // Find nodes directly connected to the cluster
      let fitNodes = this.getConnectedNodesFromCluster(this.props.diagram.cluster)
      // Wait for the network to stabilize, and then fit the view
      this.state.network.once("stabilizationIterationsDone", () => {
        this.changeView(fitNodes)
      })
    }else{
      this.state.network.openCluster(this.props.diagram.cluster)
      this.state.timeoutValues.push(setTimeout(this.changeView.bind(this), 2000, this.state.nodes.getIds()))
    }
    this.state.network.stabilize()
  }

  delayedNodesHide = (hideNode) => {
    hideNode.hidden = true
    this.state.nodes.update(hideNode)
  }

  delayedNodesShow = (hideNode) => {
    hideNode.hidden = false
    this.state.nodes.update(hideNode)
  }

  getSkidNodeIds = (skid) => {
    let skidNodes = []
    _.map(equipment.entities, key => {
      if(key.skidID == SKID_NAME) skidNodes.push(key.equipmentID)
    })
    return skidNodes
  }

  showSkid = () => {
    if(this.props.diagram.skidShown){
      // Map trough nodes and set all hidden except those in the skid
      _.map(this.state.nodes._data, node => {
        if(!node.skid){
          this.state.timeoutValues.push(setTimeout(this.delayedNodesHide, node.id / 10, node))
        }
      })
      let fitNodes = []
      if(this.props.diagram.skidCollapsed){
        // If the skid is collapsed, fit the view to the cluster
        fitNodes = this.getConnectedNodesFromCluster(this.props.diagram.cluster)
      } else {
        // If it's not collapsed, fit to the nodes in the skid
        fitNodes = this.getSkidNodeIds(SKID_NAME)
      }
      this.state.timeoutValues.push(setTimeout(this.changeView.bind(this), 2000, fitNodes))
    } else {
      // Map trough nodes and set all visible (except those in the skid who is allready visible)
      _.map(this.state.nodes._data, node => {
        if(!node.skid){
          this.state.timeoutValues.push(setTimeout(this.delayedNodesShow, node.id / 10, node))
        }
      })
      this.state.timeoutValues.push(setTimeout(this.changeView.bind(this), 2000, this.state.nodes.getIds()))
    }
  }

  showEquipmentDetail = () => {
    console.log("Show Eq detail")
  }

  componentDidMount = () => {
    // Create the network when component is mounted
    this.networkSetup()
  }

  componentWillUnmount = () => {
    // Map through timers and clear them all if the user exits the component
    _.map(this.state.timeoutValues, timer => {
      clearTimeout(timer)
    })
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.diagram.skidCollapsed != this.props.diagram.skidCollapsed){
      console.log("Collapse skid changed, update cluster")
      this.collapseSkid()
    }
    if(prevProps.diagram.skidShown != this.props.diagram.skidShown){
      console.log("Show skid changed, update cluster")
      this.showSkid()
    }
    if(prevProps.diagram.euipmentDetailShown != this.props.diagram.euipmentDetailShown){
      console.log("Show Eq detail changed, update cluster")
      this.showEquipmentDetail()
    }
  }

  render = () => {
    return (<div className="diagram" ref="visNetwork"/>)
  }
}

Diagram.propTypes = {
  selectedEquipment: PropTypes.shape({
    entities: PropTypes.object,
    numberOfSelected: PropTypes.number
  }),
  diagram: PropTypes.shape({
    skidCollapsed: PropTypes.bool,
    skidShown: PropTypes.bool,
    euipmentDetailShown: PropTypes.bool,
    clusterSelected: PropTypes.bool,
    cluster: PropTypes.string
  })
}

const mapStateToProps = (state) => {
  return { selectedEquipment: state.selectedEquipment, diagram: state.diagram };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Diagram))
