// function numRegions(graph) {
//   let regions = 0;
//   let visited = new Set();

//   for (let key in graph) {
//     if (visited.has(key)) continue;

//     visited.add(key);

//     let allVisited = true;
//     let neighbors = graph[key];

//     if (!neighbors.length) {
//       regions++;
//       continue;
//     }
    
//     neighbors.forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         allVisited = false;
//       }
//     });

//     if (allVisited) regions++;
//   }
//   return regions;
// }

function numRegions(graph) {
  let regions = 0;
  let visited = new Set();
  
  for (let node in graph) {
    if (isNewRegion(node, graph, visited)) regions++;
  }

  return regions;
}

function isNewRegion(node, graph, visited) {
  if (visited.has(node)) return false;
  visited.add(node);

  graph[node].forEach(neighbor => {
    isNewRegion(neighbor, graph, visited);
  });

  return true;
}

module.exports = {
    numRegions
};