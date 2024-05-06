function myBind(func, context, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args)
    func.apply(context, fullArgs);
  }
}

let name = {names: ['Jay', 'JD', 'Jess']};

function rollCall(...args) {
  console.log(args);
  this.names.forEach(n => console.log(n));
}

let newRollCall = myBind(rollCall, name, 'Jo', 'Jeff', 'Jackie');
newRollCall('Kael', 'Hayl');

