import https from "axios/http-common";

const getAllToDos = (email: string) => {
  return https.get(`/cards/:${email}`);
};

const createToDo = (data: any) => {
  return https.post("/cards", data);
};

const editCard = (id: number, data: any) => {
  return https.put(`/cards/:${id}`, data);
};

const deleteToDo = (id: number) => {
  return https.delete(`/cards/:${id}`);
};

const ToDoService = {
  getAllToDos,
  createToDo,
  editCard,
  deleteToDo,
};

export default ToDoService;
