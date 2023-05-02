import React, { useContext } from "react";
import { store } from "./Context";

export default function Showdemo() {
  const { fullName, setName } = useContext(store);

  return (
    <>
      <h2>Showdemo</h2>
      <p>{fullName.firstName}</p>
    </>
  );
}

