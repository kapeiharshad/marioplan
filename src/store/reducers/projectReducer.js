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
  return state;
};

export default projectReducer;
