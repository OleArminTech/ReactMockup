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
import { NODE_COLOR_DEFAULT, NODE_COLOR_SELECTED } from '../../elements/diagramConstants'

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

  changeView = () => {
    // Moves the camera to fit the skid "Storage Tank 2"
    this.state.network.fit({
      nodes: [100, 200, 300, 1000, 1700, 1800, 3600, 3700, 3800],
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
    })
  }

  networkSetup = () => {
    // Function to initialize and populate the network. Uses local state
    this.setState(initializeNetwork(this.state, this.refs.visNetwork))
    this.setState(populateNetwork(equipment, connections, connectionTypes, this.state))

    // Random function to test adding more nodes
    //this.setState(addNodes(this.state))

    // Once network is stabilized, set listeners and mark potential selected equipment
    this.state.network.once("stabilizationIterationsDone", () => {
      // Wait 500ms and then set listeners
      this.state.timeoutValues.push(setTimeout(this.setNetworkListeners.bind(this), 500))
      // Wait 600ms and then change the view
      //this.state.timeoutValues.push(setTimeout(this.changeView.bind(this), 600))
      // If there are selected equipment, mark them
      if(this.props.selectedEquipment.numberOfSelected) this.markSelectedNodes()
    })
  }

  collapseSkid = () => {
    if(this.props.diagram.skidCollapsed){
      let clusterOptionsByData = {
        joinCondition:function(childOptions) {
            return childOptions.skid == "Storage Tank 2";
        },
        clusterNodeProperties: {id:'skidCluster', label: 'Storage Tank 2', shape:'box'}
      }
      this.state.network.cluster(clusterOptionsByData)
    }else{
      this.state.network.openCluster('skidCluster')
    }
    this.state.network.stabilize()
  }

  showSkid = () => {
    console.log("Show skid")
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
