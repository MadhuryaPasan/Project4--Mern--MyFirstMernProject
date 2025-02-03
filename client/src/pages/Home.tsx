import { useEffect, useState } from "react";
import { getAllDoc } from "../functions/dbConnectApi";
import { iData } from "../functions/interface";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [data, setData] = useState<iData[]>([]);

  useEffect(() => {
    async function getAllData() {
      try {
        let result = await getAllDoc();
        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getAllData();
  }, []);

  return (
    <>
      <div>Home</div>
      {/* {data ? JSON.stringify(data) : "Loading..."} */}

      <div className="flex flex-wrap justify-center gap-4">
        {data.map((Post) => (
          <BlogCard key={Post._id}{...Post} />
        ))}
      </div>

      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
