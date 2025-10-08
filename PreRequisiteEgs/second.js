var empName = "John";
var empDept = "IT";
// Before-ES6  
var output1 = empName + " works in the " + empDept + " department.";
// After-ES6  
var output2 = "".concat(empName, " works in the ").concat(empDept, " department.");
console.log(output1); //John works in the IT department.   
console.log(output2); //John works in the IT department. 
