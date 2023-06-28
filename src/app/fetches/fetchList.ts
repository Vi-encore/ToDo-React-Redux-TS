// import { FC, PropsWithChildren, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "app/store";

const fetchList = async (children: string) => {
  const author = children;
  const apiRes = await fetch(`https://l.study-link-demo.com/cards/:${author}`);

  if (!apiRes.ok) {
    throw new Error(`fetch not OK ${author}`);
  }
  return apiRes.json();
};

export default fetchList;
