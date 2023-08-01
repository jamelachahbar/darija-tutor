import React, { useState } from "react";

function Lesson({ content, exercises }) {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      // Handle lesson completion, update progress
    }
  };

  return (
    <div className="lesson-container">
      <h2>{content.title}</h2>
      <p>{content.description}</p>

      <div className="exercise">
        {/* Render the current exercise */}
        {exercises[currentExercise]}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
