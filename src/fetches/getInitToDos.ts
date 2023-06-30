import ToDoList from "components/ToDoList/ToDoList";

async function getInitToDos(email: string) {
  const url = `https://l.study-link-demo.com/cards/:${email}`;
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      ToDoList(res); //??
    });
}

export default getInitToDos;
