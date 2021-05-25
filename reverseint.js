function reverseInt(n) {
    const num = parseInt(n.toString().split("").reverse().join(""), 10);
    if (n < 0) return num * -1;
    return num;
  }