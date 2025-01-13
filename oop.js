const PRIORITY = { LOW: 1, MEDIUM: 3, HIGH: 5, URGENT: 7 };

function validPositiveInteger(value) {
  // value can be a string or a number (integer)
  const num = Number(value);
  return Number.isInteger(num) && num >= 0;
}

function validatePriority(priority) {
  // value can be a string or a number (integer)
  const num = Number(value);
  return [PRIORITY.LOW, PRIORITY.MEDIUM, PRIORITY.HIGH, PRIORITY.URGENT].includes(num) ? num : PRIORITY.LOW;
}

function todaysDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
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
