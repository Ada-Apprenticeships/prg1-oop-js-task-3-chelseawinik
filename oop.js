// Define priority levels as constants
const PRIORITY = { LOW: 1, MEDIUM: 3, HIGH: 5, URGENT: 7 };

// Helper function to validate if a value is a positive integer
function validPositiveInteger(value) {
  const num = Number(value); // Convert the value to a number
  return Number.isInteger(num) && num >= 0; // Check if it's an integer and non-negative
}

// Helper function to validate and return a priority value
function validatePriority(value) {
  const num = Number(value); // Convert the value to a number
  // Check if the value is one of the valid priorities, otherwise default to LOW
  return [PRIORITY.LOW, PRIORITY.MEDIUM, PRIORITY.HIGH, PRIORITY.URGENT].includes(num) ? num : PRIORITY.LOW;
}

// Helper function to get the current date and time in a specific format
function todaysDate() {
  const now = new Date(); // Get the current date and time
  const day = String(now.getDate()).padStart(2, '0'); // Format day as two digits
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Format month as two digits
  const year = now.getFullYear(); // Get the full year
  const hours = String(now.getHours()).padStart(2, '0'); // Format hours as two digits
  const minutes = String(now.getMinutes()).padStart(2, '0'); // Format minutes as two digits
  const seconds = String(now.getSeconds()).padStart(2, '0'); // Format seconds as two digits
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`; // Return formatted date and time
}

// TaskList class managing a collection of Todo items
class TaskList {
  #todos; // Private field for storing the list of todos

  constructor() {
    this.#todos = []; // Initialize an empty array to store todos
  }

  // Method to add a new todo to the list
  add(todo) {
    this.#todos.push(todo); // Add the todo to the array
    return this.#todos.length; // Return the new length of the list
  }

  // Method to remove a todo by its title (case insensitive)
  remove(title) {
    const index = this.#todos.findIndex(todo => todo.title.toLowerCase() === title.toLowerCase()); // Find the index of the todo
    if (index !== -1) { // If the todo is found
      this.#todos.splice(index, 1); // Remove the todo from the array
      return true; // Return true indicating success
    }
    return false; // Return false if the todo was not found
  }

  // Method to list todos, optionally filtered by priority
  list(priority = 0) {
    return this.#todos
      .filter(todo => priority === 0 || todo.priority === priority) // Filter by priority if specified
      .map(todo => [todo.added, todo.title, todo.priority]); // Map to an array of [added, title, priority]
  }

  // Method to retrieve a specific todo by its title
  task(title) {
    const todo = this.#todos.find(todo => todo.title.toLowerCase() === title.toLowerCase()); // Find the todo
    if (!todo) { // If the todo is not found
      throw new Error(`Task '${title}' Not Found`); // Throw an error
    }
    return todo; // Return the found todo
  }
}

// Todo class representing a single todo item
class Todo {
  #title; // Private field for the task title
  #priority; // Private field for the task priority
  #added; // Private field for the date the task was added

  constructor(title, priority) {
    this.#title = title; // Set the title
    this.#priority = validatePriority(priority); // Validate and set the priority
    this.#added = todaysDate(); // Set the current date and time as the added date
  }

  // Getter for the added date
  get added() {
    return this.#added;
  }

  // Getter for the title
  get title() {
    return this.#title;
  }

  // Getter for the priority
  get priority() {
    return this.#priority;
  }

  // Setter for the priority with validation
  set priority(newPriority) {
    this.#priority = validatePriority(newPriority);
  }
}

// Export the classes and functions for automated tests
module.exports = {
  PRIORITY,
  validPositiveInteger,
  validatePriority,
  todaysDate,
  Todo,
  TaskList,
};