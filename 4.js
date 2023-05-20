{
    console.log(myVar1); // Output: undefined (before declaration)
  
    let myVar1 = "Hello";
    console.log(myVar1); // Output: Hello (after declaration and assignment)
  
    console.log(myVar2); // Output: ReferenceError: myVar2 is not defined
  
    var myVar2 = "World";
    console.log(myVar2); // Output: World (after declaration and assignment)
  
    console.log(myVar3); // Output: ReferenceError: myVar3 is not defined
  
    const myVar3 = "Hoisting";
    console.log(myVar3); // Output: Hoisting (after declaration and assignment)
  }
  