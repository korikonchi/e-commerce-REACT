import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase-data/FireBaseData";
export const FireBase = () => {
  useEffect(() => {
    const getdata = async () => {
      const data1 = await getDocs(collection(db, "users"));
      data1.forEach((doc) => {
        const names = doc.data();
        console.log(names);
      });
    };
    getdata();
  }, []);
  return <h1>firebase</h1>;
};
export default FireBase;
