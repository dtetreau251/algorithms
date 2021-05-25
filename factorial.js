function factorialIterative(n) {
    let result = 1;
    for (let int = 1; int <= n; int++) result *= int;
  
    return result;
  }
  
  // Recursive version
  function factorial(n) {
    if (n < 2) return 1;
    return factorial(n - 1) * n;
  }