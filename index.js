// Write your solution in this file
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
       const newEmployee = { ...employee };  
        delete newEmployee[key];   return newEmployee;}// Returns "employee" 

        function destructivelyDeleteFromEmployeeByKey(employee,key)  {
    employee[`name`] = `Sam`;    
    employee[`streetAddress`] = `12 Broadway`;    

    delete employee[`name`]   
 return employee
}


