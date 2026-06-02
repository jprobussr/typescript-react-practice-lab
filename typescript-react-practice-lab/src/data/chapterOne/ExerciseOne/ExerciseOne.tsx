import './ExerciseOne.css';

const ExerciseOne = () => {
  const studentId: number = Math.floor(Math.random() * 1000 + 1);
  const studentName: string = 'Homer';
  const lastName: string = 'Simpson';
  const lessonNumber: number = 1;
  const isLearningTypeScript: boolean = true;

  const getFullName = (firstName: string, familyName: string): string => {
    return `${firstName} ${familyName}`;
  };

  return (
    <section className="exercise-one">
      <h1>Chapter 1: TypeScript Basics</h1>
      <h2>Exercise 1: Basic Typed Variables</h2>
      <p>We are practicing string, number, and boolean types.</p>

      <div className="exercise-one__card">
        <p> Student Id: #{studentId}</p>
        <p>Student: {getFullName(studentName, lastName)}</p>
        <p>Lesson Number: {lessonNumber}</p>
        <p>Learning TypeScript: {isLearningTypeScript ? 'Yes' : 'No'}</p>
      </div>
    </section>
  );
};

export default ExerciseOne;
