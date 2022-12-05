const nodes = [
    { id: 1, label: "US - 324" },
    { id: 2, label: "US - 344" },
    { id: 3, label: "US - 327" },
    { id: 4, label: "US - 342" },
    { id: 5, label: "US - 166" },
    { id: 6, label: "US - 199" },
    { id: 7, label: "US - 200" },
];

const nodeCounter = $("#nodeCounter")[0];
nodeCounter.innerHTML = nodes.length;

const usPackage = $("#userStoryPackage")[0];
usPackage.placeholder = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="">
    <types>
        <members>Data</members>
        <name>DataName</name>
    </types>
    <version>55.0</version>
</Package>
`;

// create an array with nodes
var visNodes = new vis.DataSet([
    { id: 1, label: "US - 324" },
    { id: 2, label: "US - 344" },
    { id: 3, label: "US - 327" },
    { id: 4, label: "US - 342" },
    { id: 5, label: "US - 166" },
    { id: 6, label: "US - 199" },
    { id: 7, label: "US - 200" },
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    { from: 1, to: 3, arrows: {
        to: {
          enabled: true,
          type: "arrow",
        },
      } },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
  ]);

  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: visNodes,
    edges: edges,
  };
  var options = {};
  var network = new vis.Network(container, data, options);
  
  network.on("selectNode", function (params) 
    {
        params.event = "[original event]";
        console.log(JSON.stringify(params, null, 4));
        console.log(params.nodes[0]);
        const nodeIdSelected = params.nodes[0];
        const nodeTitle = $("#nodeTitle")[0];
        for(let i=0 ; i<nodes.length; i++){
            if(nodes[i].id == nodeIdSelected){
                nodeTitle.innerHTML = nodes[i].label;
            }
        }
        
    });

function deleteSelectedButton(){
    const selectedNodes = network.getSelectedNodes();
    if(selectedNodes.length>0){
        network.deleteSelected();
    }
}