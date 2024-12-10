const _ = function(element) {
  const valuesMatch = function(test, elObj) {
    return Object.keys(test).every(key => elObj.hasOwnProperty(key) && elObj[key] === test[key]);
  }

  return {
    last() {
      return element.at(-1);
    },

    first() {
      return element[0];
    },

    without(...args) {
      let newEl = [];

      element.forEach(el => {
        if (!args.includes(el)) newEl.push(el);
      });

      return newEl;
    },

    lastIndexOf(value) {
      for (let i = element.length - 1; i >= 0; i--) {
        if (element[i] === value) return i;
      }

      return -1;
    },

    sample(quantity) {
      const randomIdx = (size) => Math.floor(Math.random() * size);
      let copy = element.slice();
      let result = [];
      if (!quantity) {
        return copy[randomIdx(copy.length)];
      } else {
        let count = 0;
        while(count < quantity) {
          let idx = randomIdx(copy.length);
          let val = copy.splice(idx, 1)[0];
          result.push(val);
          count += 1;
        }

        return result;
      }
    },

    findWhere(obj) {
      for (let i = 0; i < element.length; i++) {
        let curr = element[i];
        if (valuesMatch(obj, curr)) {
          return curr;
        }
      }
    },

    where(obj) {
      let result = [];

      for (let i = 0; i < element.length; i++) {
        let curr = element[i];
        if (valuesMatch(obj, curr)) {
          result.push(curr);
        }
      }

      return result;
    },

    pluck(key) {
      let result = [];
      
      element.forEach(obj => {
        if (obj.hasOwnProperty(key)) {
          result.push(obj[key]);
        }
      });

      return result;
    },

    keys() {
      // let result = [];
      // for (let key in element) {
      //   if (element.hasOwnProperty(key)) result.push(key);
      // }

      // return result;

      return Object.keys(element);
    },

    values() {
      // let result = [];

      // for (let key in element) {
      //   if (element.hasOwnProperty(key)) result.push(element[key]);
      // }

      // return result;

      return Object.values(element);
    },

    pick(...keys) {
      let result = {};

      keys.forEach(key => {
        if (element.hasOwnProperty(key)) {
          result[key] = element[key];
        }
      });

      return result;
    },

    omit(...keys) {
      let result = {};

      Object.keys(element).forEach(key => {
        if (!keys.includes(key)) result[key] = element[key];
      });

      return result;
    },

    has(key) {
      return Object.prototype.hasOwnProperty.call(element, key);
    },

    isElement() { return _.isElement(element) },
    isArray() { return _.isArray(element) },
    isObject() { return _.isObject(element) },
    isFunction() { return _.isFunction(element) },
    isBoolean() { return _.isBoolean(element) },
    isString() { return _.isString(element) },
    isNumber() { return _.isNumber(element) },
  };
};

_.range = function range(start, end) {
  let el = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (;start < end; start += 1) {
    el.push(start);
  }

  return el;
};

_.extend = function extend(main, ...objs) {
  objs.forEach(obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        main[key] = obj[key];
      }
    }
  });

  return main;
}

_.isElement = function isElement(obj) {
  return obj && obj.nodeType === 1;
};

_.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

_.isObject = function isObject(obj) {
  return typeof obj === 'object' || typeof obj === 'function' && !!obj; 
};

_.isFunction = function isFunction(func) {
  return typeof func === 'function';
};

["Boolean", "String", "Number"].forEach(method => {
  _['is' + method] = function(obj) {
    return toString.call(obj) === '[object ' + method + ']';
  };
});