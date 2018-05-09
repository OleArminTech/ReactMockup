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
import { NODE_COLOR_DEFAULT, NODE_COLOR_SELECTED, CLUSTER_NAME } from '../../elements/diagramConstants'

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
    // Moves the camera to fit the skid "Storage Tank 2"
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

  setNetworkListeners = () => {
    // On doubleclick, either select or unselect equipment node
    this.state.network.on("doubleClick", params => {
      // First check if a cluster is selected, different rules apply for clusters
      if(this.state.network.isCluster(params.nodes[0])){
        console.log("Cluster: " + params.nodes[0])

        // Get all the nodes in the cluster
        let clusterNodes = this.state.network.getNodesInCluster(this.props.diagram.cluster)
        let clusterSelected = true
        // Check if all cluster nodes are selected
        _.map(clusterNodes, node => {
          if(_.includes(this.props.selectedEquipment.entities, node)){
             console.log("Node found: " + node)
          } else {
             console.log("Node not found: " + node)
             clusterSelected = false
          }
        })
        console.log("Selected: " + clusterSelected)
        if(clusterSelected && this.props.diagram.clusterSelected){
          // All nodes are selected, and has previously been marked selected as a cluster
          // This means the user want to unselect with this doubleclick

          // Map trough all the nodes in the cluster and unselect them individually
          _.map(clusterNodes, node => {
            // Check if the node is selected, and unselect it
            if(!_.includes(this.props.selectedEquipment.entities, node.id)){
              this.props.actions.removeSelected(node.id)
              // Change the color and update the network
              node.color = NODE_COLOR_DEFAULT
              this.state.nodes.update(node)
            }
          })
          this.state.network.clustering.updateClusteredNode(this.props.diagram.cluster, {
            color: {
              border: '#1e1e1e',
              background: '#ffffff',
              highlight: {
                border: '#2B7CE9',
                background: '#D2E5FF'
              },
              hover: {
                border: '#2B7CE9',
                background: '#D2E5FF'
              }
            }
          })
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

          // Map trough all the nodes in the cluster and select them individually
          _.map(clusterNodes, node => {
            // Check if the node is allready selected, add it to selected if not
            if(!_.includes(this.props.selectedEquipment.entities, node.id)){
              this.props.actions.addSelected(node.id)
              // Change the color and update the network
              node.color = NODE_COLOR_SELECTED
              this.state.nodes.update(node)
            }
          })
          this.state.network.clustering.updateClusteredNode(this.props.diagram.cluster, {
            color: {
              border: '#00afaf',
              background: '#00ff96',
              highlight: {
                border: '#0000ff',
                background: '#00c8c8'
              },
              hover: {
                border: '#0000ff',
                background: '#00c8c8'
              }
            }
          })
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
      }
      if(this.props.diagram.skidShown && !this.state.diagram.skidShown){
        // Skid marked as shown from previous mount, show it
        this.state.timeoutValues.push(setTimeout(this.showSkid.bind(this), 500))
      }
    })
    console.log(this.state.network.clustering)
  }

  collapseSkid = () => {
    if(this.props.diagram.skidCollapsed){
      let clusterOptionsByData = {
        joinCondition:function(childOptions) {
            return childOptions.skid == "Storage Tank 2";
        },
        clusterNodeProperties: {id:this.props.diagram.cluster, label: 'Storage Tank 2', shape:'box'}
      }
      this.state.network.cluster(clusterOptionsByData)
      //this.state.timeoutValues.push(setTimeout(this.changeView.bind(this), 600, this.props.diagram.cluster))
      //console.log(this.state.network.cluster)
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

  showSkid = () => {
    if(this.props.diagram.skidShown){
      // Map trough nodes and set all hidden except those in the skid
      _.map(this.state.nodes._data, node => {
        if(!node.skid){
          this.state.timeoutValues.push(setTimeout(this.delayedNodesHide, node.id / 10, node))
        }
      })
      this.state.timeoutValues.push(setTimeout(this.changeView.bind(this), 2000, [100, 200, 300, 1000, 1700, 1800, 3600, 3700, 3800]))
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
  selectedEquipment: PropTypes.shape({
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
