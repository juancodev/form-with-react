import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const useGetData = () => {

  React.useEffect(() => {
    const getDataDb = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        const test = doc.data()
        console.log(test !== false);

      });
    }
    getDataDb();
  }, []);
}

export { useGetData };