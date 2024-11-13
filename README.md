# Todos API

This project is a simple CRUD API built with Node.js and Express for managing a list of to-do items. It includes features for adding a priority field to tasks, marking all tasks as completed, and filtering tasks based on completion status.

## Assignment Overview

The assignment involves extending a basic Todos API with the following functionalities:

1. **Add a "Priority" Field to To-Do Items**:
   - The `POST /todos` endpoint accepts a new field called `priority` with values like "high", "medium", or "low". If not specified, it defaults to "medium".
   - The `GET /todos` endpoint now returns each to-do item with its `priority` field included.

2. **Complete All Tasks**:
   - A new `PUT /todos/complete-all` endpoint marks all to-do items as completed.

3. **Filter To-Do Items by Completion Status**:
   - The `GET /todos` endpoint accepts an optional `completed` query parameter to filter tasks based on their completion status (`true` or `false`).

## API Endpoints

1. **Add a To-Do Item with Priority** (`POST /todos`): Adds a new to-do item with an optional `priority` field.
2. **Retrieve All To-Do Items** (`GET /todos`): Retrieves all to-do items, with an optional filter by `completed` status.
3. **Complete All To-Do Items** (`PUT /todos/complete-all`): Marks all to-do items as completed.
4. **Update a To-Do Item by ID** (`PUT /todos/:id`): Updates the task, completion status, or priority of a specific to-do item.
5. **Delete a To-Do Item by ID** (`DELETE /todos/:id`): Deletes a specific to-do item.
