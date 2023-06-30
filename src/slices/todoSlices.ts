import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

//getInitToDos => fetch

async function getInitToDos(email: any) {
  const url = `https://l.study-link-demo.com/cards/:${email}`;
  const toDoList = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res.length === 0) {
        console.log("there are no toDos");
      } else {
        console.log(res);
        //give res to component(toDoList) to mao through it (give all data to card comp)
      }
    });
}

//  const getInitToDos = () => {

// }

const initValue = {
  toDoList: getInitToDos(localStorage.getItem("email")),
};
