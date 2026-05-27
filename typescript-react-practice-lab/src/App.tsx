import { useState } from 'react';
import './App.css';

type LearningStatus = 'active' | 'paused' | 'completed';

type Student = {
  id: number;
  name: string;
  status: LearningStatus;
};

const initialStudents: Student[] = [
  {
    id: 1,
    name: 'John',
    status: 'active',
  },
  {
    id: 2,
    name: 'Brittany',
    status: 'active',
  },
  {
    id: 3,
    name: 'Amy',
    status: 'paused',
  },
  {
    id: 4,
    name: 'Tony',
    status: 'completed',
  },
];

const statusOptions: (LearningStatus | 'all')[] = [
  'all',
  'active',
  'paused',
  'completed',
];

const getStatusLabel = (status: LearningStatus): string => {
  if (status === 'active') {
    return 'Actively learning';
  }

  if (status === 'paused') {
    return 'Paused for now';
  }

  return 'Completed';
};

const App = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [statusFilter, setStatusFilter] = useState<LearningStatus | 'all'>(
    'all',
  );

  const markStudentCompleted = (studentId: number) => {
    setStudents((prevStudents) => {
      return prevStudents.map((student) => {
        if (student.id === studentId) {
          return {
            ...student,
            status: 'completed',
          };
        }
        return student;
      });
    });
  };

  const filteredStudents =
    statusFilter === 'all'
      ? students
      : students.filter((student) => student.status === statusFilter);

  return (
    <main className="app">
      <h1>TypeScript React Practice Lab</h1>
      <p>Learning TypeScript with React one step at a time.💡</p>

      <div className="filter-buttons" aria-label="Filter students by status">
        {statusOptions.map((status) => {
          return (
            <button
              key={status}
              type="button"
              className={statusFilter === status ? 'active-filter' : ''}
              onClick={() => setStatusFilter(status)}
            >
              {status === 'all' ? 'ALL' : getStatusLabel(status)}
            </button>
          );
        })}
      </div>

      <section className="practice-list">
        {filteredStudents.map((student) => {
          return (
            <article className="practice-card" key={student.id}>
              <h2>{student.name}</h2>
              <p>Student ID: {student.id}</p>

              <p>
                Status:{' '}
                <span className={`status-badge ${student.status}`}>
                  {getStatusLabel(student.status)}
                </span>
              </p>

              <button
                onClick={() => markStudentCompleted(student.id)}
                disabled={student.status === 'completed'}
              >
                {student.status === 'completed'
                  ? 'Completed'
                  : 'Mark Completed'}
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default App;
