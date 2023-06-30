import ToDoList from "components/ToDoList/ToDoList";
import getAllToDos from "axios/ToDoService";

async function getInitToDos(email: string) {
  const url = `https://l.study-link-demo.com/cards/:${email}`;
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      // ToDoList(res, email); //??
    });
  // getAllToDos(email)
  //   .then((res: any) => res.json())
  //   .then((res: any) => {
  //     ToDoList(res, email); //??
  //   });
}

export default getInitToDos;
