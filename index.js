const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data to simulate initial to-do list items
let todos = [
  { id: 1, task: "Learn Node.js", completed: false, priority: "medium" },
  { id: 2, task: "Build a REST API", completed: false, priority: "medium" }
];

// Question 1: Add a "Priority" Field to the To-Do API
// GET /todos - Retrieves all to-do items, with optional completed status filter
app.get('/todos', (req, res) => {
  const completedFilter = req.query.completed;
  
  // Filters todos based on completed status if specified in the query parameter
  if (completedFilter !== undefined) {
    const isCompleted = completedFilter === 'true';
    const filteredTodos = todos.filter(todo => todo.completed === isCompleted);
    return res.json(filteredTodos);
  }
  
  res.json(todos); // Return all todos if no filter is provided
});

// POST /todos - Adds a new to-do item with a priority field
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
    priority: req.body.priority || "medium" // Sets priority to "medium" if not provided
  };
  todos.push(newTodo);
  res.status(201).json(newTodo); // Respond with the created to-do item
});

// Question 2: Complete All Endpoint
// PUT /todos/complete-all - Marks all to-do items as completed
app.put('/todos/complete-all', (req, res) => {
  todos = todos.map(todo => ({ ...todo, completed: true }));
  res.json({ message: "All to-do items marked as completed", todos });
});

// PUT /todos/:id - Updates an existing to-do item by its ID
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).send("To-Do item not found");
  }
  // Updates task, completed status, and priority if provided
  todo.task = req.body.task || todo.task;
  todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
  todo.priority = req.body.priority || todo.priority;
  res.json(todo);
});

// DELETE /todos/:id - Deletes a to-do item by its ID
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).send("To-Do item not found");
  }
  todos.splice(index, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
