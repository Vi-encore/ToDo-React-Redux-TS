import https from "axios/http-common";

const getAllCards = (email: string) => {
  return https.get(`/cards/:${email}`);
};

const createCard = (data: any) => {
  return https.post("/cards", data);
};

const editCard = (id: number, data: any) => {
  return https.put(`/cards/:${id}`, data);
};

const deleteCard = (id: number) => {
  return https.delete(`/cards/:${id}`);
};

const ToDoService = {
  getAllCards,
  createCard,
  editCard,
  deleteCard,
};

export default ToDoService;
