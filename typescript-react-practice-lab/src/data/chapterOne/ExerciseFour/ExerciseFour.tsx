import "./ExerciseFour.css";
import { topics } from "./topics";

const ExerciseFour = () => {
  return (
    <section className="exercise-four">
      <div className="topics-card">
        <h3>Topics Learned</h3>
        <ul className="topics-list">
          {topics.map((topic) => {
            return (
              <li className="topic-item" key={topic.id}>
                <span className="topic-title">{topic.title}</span>

                <span
                  className={
                    topic.isCompleted
                      ? "status completed"
                      : "status in-progress"
                  }
                >
                  {topic.isCompleted ? "Completed" : "In progress"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ExerciseFour;
