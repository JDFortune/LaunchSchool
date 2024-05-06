function bind(func, ...args) {
  let context = args.shift();

  return function(...moreArgs) {
    let allArgs = args.concat(moreArgs);

    func.apply(context, allArgs);
  }
}