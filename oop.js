const PRIORITY = { LOW: 1, MEDIUM: 3, HIGH: 5, URGENT: 7 };

function validPositiveInteger(value) {
  // value can be a string or a number (integer)
  const num = Number(value);
  return Number.isInteger(num) && num >= 0;
}

function validatePriority(priority) {
  // value can be a string or a number (integer)
}

function todaysDate() {

}

class TaskList {
  
}

class Todo {
  
}

// Leave this code here for the automated tests
module.exports = {
  PRIORITY,
  validPositiveInteger,
  validatePriority,
  todaysDate,
  Todo,
  TaskList,
};
