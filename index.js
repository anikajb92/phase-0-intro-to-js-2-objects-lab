// Write your solution in this file!
const employee = {
    name : 'Anika',
    streetAddress : '123 Sesame St'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return Object.assign({}, employee, {[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    return Object.assign({}, employee, {[key]:undefined});
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}