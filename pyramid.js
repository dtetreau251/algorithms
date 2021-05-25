function pyramid(n) {
    const lineWidth = n * 2 - 1;
  
    for (let i = 1; i <= n; i++) {
      const numHash = i * 2 - 1;
      const hashString = "#".repeat(numHash);
  
      const numSpacesEachSide = (lineWidth - numHash) / 2;
  
      console.log(
        " ".repeat(numSpacesEachSide) + hashString + " ".repeat(numSpacesEachSide)
      );
    }
  }