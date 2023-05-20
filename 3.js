function addNumAer(numAer1, numAer2) {
    console.log(myVar); // Output: undefined (before assignment)
    
    var myVar;
    console.log(myVar); // Output: undefined (after declaration)
    
    myVar = "Hello, hoisting!";
    console.log(myVar); // Output: Hello, hoisting!
    
    return numAer1 + numAer2;
  }
  
  const result = addNumAer(5, 10);
  console.log(result);
  