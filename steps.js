function steps(n) {
    for (let i = 1; i <= n; i++) {
      const str = "#".repeat(i) + " ".repeat(n - i);
      console.log(str);
    }
  }