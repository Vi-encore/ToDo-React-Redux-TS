// import { isFulfilled } from "@reduxjs/toolkit";
// import axios from "axios"; //not importing axios??
// import axios from "/node_modules/axios/index";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAllToDos,
//   getLoading,
//   allToDosLoad,
//   allToDosReceived,
// } from "slices/todoSlices";
import Card from "components/Card/Card";
// import getInitToDos from "fetches/getInitToDos";

const ToDoList = (resp: any, email: string) => {
  const test = [
    {
      id: 1,
      title: "here is title1",
      description: "i am description1",
      user: "email",
    },
    {
      id: 2,
      title: "here is title2",
      description: "i am description2",
      user: "email",
    },
    {
      id: 3,
      title: "here is title3",
      description: "i am description3",
      user: "email",
    },
    {
      id: 4,
      title: "here is title4",
      description: "i am description4",
      user: "email",
    },
  ];
  //map through resp => give info to Card

  if (Object.keys(resp).length === 0) {
    return <div className="dashboard__cards">No Items Found</div>;
  } else {
    const list = Object.keys(resp).map((item: any) => Card(item));
    return <div className="dashboard__cards">{list}</div>;
  }
};

export default ToDoList;
