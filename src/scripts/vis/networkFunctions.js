import vis from 'vis'

export const initializeNetwork = (state, path) => {
  // create an array for nodes
  state.nodes = new vis.DataSet([])

  // create an array with edges
  state.edges = new vis.DataSet([])

  // provide the data in the vis format
  state.data = {
    nodes: state.nodes,
    edges: state.edges
  }

  state.options = {
    layout: {
      randomSeed: 751628,
      improvedLayout: true
    },
    nodes: {
      shape: 'box',
      margin: 10,
      widthConstraint: 150,
      heightConstraint: {
        minimum: 60,
        valign: 'middle'
      },
      color: {
        background: 'rgb(255,255,255)',
        border: 'rgb(30,30,30)'
      },
      font: {
        multi: true
      },
      shadow: true
    },
    "edges": {
      "arrows": "to",
      "smooth": {
        "type": "cubicBezier",
        "forceDirection": "horizontal",
        "roundness": 0.75
      },
      width: 2
    },
    interaction: {
      multiselect: false,
      navigationButtons: true,
      hover: true
    },
    physics: {
      enabled: false,
      solver: 'forceAtlas2Based',
      forceAtlas2Based: {
        gravitationalConstant: -400,
        springLength: 30,
        avoidOverlap: 1
      }
    }
  }

  state.network = new vis.Network(path, state.data, state.options)

  return state
}

export const populateNetwork = (equipment, connections, connectionTypes, state) => {
  _.map(equipment.entities, key => {
    state.nodes.add({
      id: key.equipmentID,
      label: key.componentID + '\n<b>' + key.equipmentName + '</b>\n<i>' + key.skidID + '</i>',
      title: key.equipmentID
    })
  })

  _.map(connections.entities, (key, index) => {
    state.edges.add({
      id: index,
      from: key.equipmentIDfrom,
      to: key.equipmentIDto,
      label: connectionTypes.entities[key.connectionTypeID].connectionType,
      color: {
        color: connectionTypes.entities[key.connectionTypeID].color,
        inherit: false
      }
    })
  })
  state.network.stabilize()
  return state
}
