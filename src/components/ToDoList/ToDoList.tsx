// import { isFulfilled } from "@reduxjs/toolkit";

import Card from "components/Card/Card";

const ToDoList = (resp: any) => {
  // console.log(Object.keys(resp).length);
  console.log(resp);

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
  // if(resp.length === 0) {
  // return <div className="dashboard__cards">No items found</div>
  // } else {
  // const list = () => resp.map((item: any) => Card(item))
  // return (<div className="dashboard__cards">{list}</div>)
  //  }

  if (Object.keys(resp).length === 0) {
    return <div className="dashboard__cards">No items found</div>;
  } else {
    const list = Object.keys(resp).map((item: any) => Card(item));
    return <div className="dashboard__cards">{list}</div>;
  }

  // return (
  //   <div className="dashboard__cards">
  //     {/* {list} */}
  //     <Card>Card title</Card>
  //     <Card>Card title</Card>
  //   </div>
  // );
};

export default ToDoList;
