// import { isFulfilled } from "@reduxjs/toolkit";

import Card from "components/Card/Card";

const ToDoList = (resp: any) => {
  //map through resp => give info to Card

  return (
    <div className="dashboard__cards">
      <Card>Card title</Card>
      <Card>Card title</Card>
    </div>
  );
};

export default ToDoList;
