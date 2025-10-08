let empName: string = "John";   
let empDept: string = "IT";   
  
// Before-ES6  
let output1: string = empName + " works in the " + empDept + " department.";   
  
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;   
  
console.log(output1);//John works in the IT department.   
console.log(output2);//John works in the IT department. 
