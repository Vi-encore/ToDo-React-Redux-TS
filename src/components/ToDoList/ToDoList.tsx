// import fetchList from "app/fetches/fetchList";
// import { isFulfilled } from "@reduxjs/toolkit";

import Card from "components/Card/Card";

const ToDoList = () => {
  // const result = fetchList("dasf");
  // // console.log(result.then(Pr));
  // const fulfilled = result.then(isFulfilled);

  // if (!fulfilled) {
  //   const fulfilled = result.then(isFulfilled);
  //   return (
  //     <>
  //       <div>LOADING</div>
  //     </>
  //   );
  // }

  return (
    <div className="dashboard__cards">
      <Card>Card title</Card>
      <Card>Card title</Card>
      <Card>Card title</Card>
      {/* </div> */}
    </div>
  );
};

export default ToDoList;
