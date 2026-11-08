import React, { useState } from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Go to gym', priority: 'High', status: 'To Do' },
    { id: 2, name: 'Read a book', priority: 'Low', status: 'Done' },
    { id: 3, name: 'Go to market', priority: 'Medium', status: 'In Progress' }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Navbar bg="dark" variant="dark" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#home">📝 React TodoList CRUD (React 19)</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-secondary m-0">Task List</h2>
          <Button variant="primary" onClick={handleShowForm} className="px-4 shadow-sm">
            + Add Task
          </Button>
        </div>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
        />

        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </Container>
    </div>
  );
}

export default App;