import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  // Fungsi untuk menentukan warna badge berdasarkan Prioritas
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return <Badge bg="danger">High</Badge>;
      case 'Medium':
        return <Badge bg="warning" text="dark">Medium</Badge>;
      case 'Low':
        return <Badge bg="success">Low</Badge>;
      default:
        return <Badge bg="secondary">{priority}</Badge>;
    }
  };

  // Fungsi untuk menentukan warna badge berdasarkan Status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Done':
        return <Badge bg="success">Done</Badge>;
      case 'In Progress':
        return <Badge bg="info" text="dark">In Progress</Badge>;
      case 'To Do':
      default:
        return <Badge bg="secondary">To Do</Badge>;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center text-muted py-4">
        <p>Belum ada tugas yang ditambahkan. Silahkan klik tombol "+ Add Task".</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <Card className="mb-3 shadow-sm border-0" key={task.id}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-2 fw-bold text-dark">{task.name}</h5>
              <div className="d-flex gap-2 align-items-center">
                <span className="text-muted small">Prioritas:</span> {getPriorityBadge(task.priority)}
                <span className="text-muted small ms-2">Status:</span> {getStatusBadge(task.status)}
              </div>
            </div>
            <div className="d-flex gap-2">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => showEditForm(task)}
                title="Edit Task"
              >
                ✏️ Edit
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
                title="Delete Task"
              >
                🗑️ Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;