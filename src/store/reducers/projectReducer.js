const initState = {
  projects: [
    {
      id: 1,
      title: "sunt aut facere repellat provident",
      content: "quia et suscipit\nsuscipit recusandae"
    },
    {
      id: 2,
      title: "provident occaecati excepturi optio",
      content: "quia et suscipit\nsuscipit recusandae"
    },
    {
      id: 3,
      title: "excepturi optio reprehenderit",
      content: "quia et suscipit\nsuscipit recusandae"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return state;
    case "CREATE_PROJECT_ERROR":
      return state;
    default:
      return state;
  }
};

export default projectReducer;
