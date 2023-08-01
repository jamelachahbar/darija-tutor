const initialState = {
  progress: {},
  achievements: [],
  currentLesson: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_PROGRESS":
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.moduleId]: action.lessonId,
        },
      };
    case "UPDATE_USER_ACHIEVEMENTS":
      return {
        ...state,
        achievements: [...state.achievements, action.achievement],
      };
    default:
      return state;
  }
};

export default userReducer;
