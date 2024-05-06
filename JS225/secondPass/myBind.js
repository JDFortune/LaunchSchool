function myBind(func, context, ...args) {
  return function(...moreArgs) {
    let allArgs = args.concat(moreArgs);

    return func.apply(context, allArgs); 
  }
}

let obj = {
  a: 'hello',
  b: 'goodbye',
  c: 'Jello',
}

function say() {
  console.log(this.a, this.b, this.c);
}

let obj2 = {
  a: 'what',
  b: 'is',
  c: 'up',
}

let boundSay = myBind(say, obj);

boundSay();
boundSay.call(obj2);