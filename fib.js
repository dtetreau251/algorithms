const slowFib = (n) => {
    if (n < 2) return n;
  
    return fib(n - 1) + fib(n - 2);
  }
  
  // This is generic memoization method
  // It memoizes functions!
  // If a function has already calculated a call with a specific argument
  // It will store the result, so it never has to calculate something twice
  const memoize = (func) => {
    const cache = {};
  
    return function (...args) {
      if (cache[args]) return cache[args];
  
      const result = func(...args);
      cache[args] = result;
  
      return result;
    };
  };