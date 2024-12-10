function colorGeneration(target) {
  let generation = 0;
  let children = [document.body];

  while (generation < target) {
    generation += 1;
    children = children.flatMap(parent => Array.from(parent.children));
  }

  if (children) color(children);
}

function color(children) {
  children.forEach(child => child.classList.add('generation-color'));
}



colorGeneration(2);