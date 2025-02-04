import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { iData } from "../functions/interface";
import { getOneDoc } from "../functions/dbConnectApi";

const ReadBlog = () => {
  const Navigate = useNavigate();
  const params = useParams();
  const id = params.id ?? "";

  const [data, setData] = useState<iData>();

  useEffect(() => {
    async function loadPost() {
      try {
        let result = await getOneDoc(id);
        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    loadPost();
  }, []);

  return (
    <>
      {/* -1 go back one page */}
      <button
        className="bg_primary m-2 p-2 rounded-xl"
        onClick={() => Navigate(-1)}
      >
        {" "}
        go Back
      </button>
      <div>ReadBlog</div>
      {/* <div>{data ? JSON.stringify(data) : "Loading..."}</div> */}
      {/* <div>{data._id}</div>
      <div>{data.}</div> */}

      <div>{data?.name}</div>
      <div>{data?.age}</div>
      <div>{data?._id}</div>
    </>
  );
};

export default ReadBlog;

//2.33.32
