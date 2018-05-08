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

export const addNodes = (state) => {
  state.nodes.add({id: 10001, label: "Modul 1"})
  state.nodes.add({id: 10002, label: "Modul 2"})
  state.nodes.add({id: 10003, label: "Modul 3"})
  state.edges.add({
    id: 10001,
    from: 10002,
    to: 10001,
    label: "Kobling 1",
    smooth: {
      type: "curvedCCW",
      roundness: 0.4
    }
  })
  state.edges.add({
    id: 10002,
    from: 10003,
    to: 10001,
    label: "Kobling 2",
    smooth: {
      type: "curvedCCW",
      roundness: 0.4
    }
  })
  state.edges.add({
    id: 10003,
    from: 10001,
    to: 10003,
    label: "Kobling 3",
    smooth: {
      type: "curvedCCW",
      roundness: 0.4
    }
  })
  state.edges.add({
    id: 10004,
    from: 10002,
    to: 10003,
    label: "Kobling 4",
    smooth: {
      type: "curvedCW",
      roundness: 0.4
    }
  })
  return state
}
