// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

function arrayToNodes([nodeName, children]) {
  let element = document.createElement(nodeName);
  children.forEach(child => element.appendChild(arrayToNodes(child)));
  
  return element;
}

console.log(arrayToNodes(nodes));