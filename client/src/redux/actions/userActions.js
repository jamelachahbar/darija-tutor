export const updateUserProgress = (moduleId, lessonId) => ({
  type: "UPDATE_USER_PROGRESS",
  moduleId,
  lessonId,
});

export const updateUserAchievements = (achievement) => ({
  type: "UPDATE_USER_ACHIEVEMENTS",
  achievement,
});
