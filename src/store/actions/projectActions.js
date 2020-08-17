export const createProject = (project) => {
  console.log("from createproject project::", project);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
