function nodeSwap(id1, id2) {
  let element1 = document.getElementById(String(id1));
  let element2 = document.getElementById(String(id2));

  if (!element1 || !element2 ||
      element1.contains(element2) ||
      element2.contains(element1)) return;

  let nextSibling1 = element1.nextSibling;
  let nextSibling2 = element2.nextSibling;

  swap(nextSibling1, element2);
  swap(nextSibling2, element1);
}

function swap(sibling, element) {
  if (sibling === null) {
    sibling.parentNode.appendChild(element);
  } else {
    sibling.parentNode.insertBefore(element, sibling);
  }
}

nodeSwap(3, 1);
nodeSwap(7, 9);