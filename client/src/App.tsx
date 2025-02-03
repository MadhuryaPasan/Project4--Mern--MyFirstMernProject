//install npm install axios
import { useEffect, useState } from "react";
import {
  getAllDoc,
  getOneDoc,
  createDoc,
  updateDoc,
  deleteDoc,
  iData,
} from "./functions/dbConnectApi";

import "./App.css";

function App() {
  const [data, setData] = useState<iData>();


// get all documents
  useEffect(() => {
    async function getAll() {
      try {
        let result = await getAllDoc();
        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getAll();
  }, []);


  // insert data
  function insertBtn() {
    let data: iData = {
      name: "sam",
      age: 10,
    };

    createDoc(data);
  }

// update data
function updateBtn() {
    let data: iData = {
      name: "sam",
      age: 20,
    };

    updateDoc("67a0c6563bfbaf913b4bd432", data);
  }

  // delete data
  function deleteBtn() {
    deleteDoc("67a0c6563bfbaf913b4bd432");
  }


  return (
    <>
      <div>
        <button onClick={updateBtn} className="bg-sky-300 m-2 p-2">update</button>
        <br />
        <button onClick={insertBtn} className="bg-sky-300 m-2 p-2">insert</button>
        <br />
        <button onClick={deleteBtn} className="bg-sky-300 m-2 p-2">delete</button>
      </div>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>
    </>
  );
}

export default App;
