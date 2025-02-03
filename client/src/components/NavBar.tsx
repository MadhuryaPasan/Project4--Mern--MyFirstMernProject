import { Link } from "react-router-dom";
import { PageData, iPageData } from "./PageData";

const NavBar = () => {
  return (
    <>
<div className=" w-[100vw] flex justify-center gap-5 bg_primary p-2">
          {PageData.map((page: iPageData ,index) => (
            <Link key={index} to={page.path} className="p-2 hover:bg-white rounded-md hover:text-black text-white transition duration-300 ease-in-out">
              <button className=" cursor-pointer ">{page.name}</button>
            </Link>
          ))}
</div>
    </>
  );
};

export default NavBar;

/* if you need to ad additional calculation or something use this


return (
    <>
      {PageData.map((page: iPageData) => {
        return(<Link key={page.path} to={page.path}>
          {page.name}
        </Link>)
      })}
    </>
  );

*/
