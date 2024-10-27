import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { ReactNode, useContext, useState } from "react";
import { PageContext } from "../../context/PageContext";



const DropPlatforms = ({ children}:  { children: ReactNode }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const {data: platforms} = useFetch(
    ` https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
  );
  const results = platforms?.results;
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  const isActive = (obj: {isActive: boolean}) =>
    obj.isActive ? 'text-white  bg-accent p-3 rounded-none px-8 text-center flex justify-center' : 'text-white p-3 rounded-none px-8 hover:bg-accent text-center flex justify-center';

  const { page, nextPage, prevPage,startPage,setPage } = context;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  

  const handleClick = ()=>{

    setIsOpen(false);
    setPage(1);
    startPage();
  }
// console.log(results);

  return (
    <div className="dropdown  dropdown-bottom text-white p-3 rounded-none px-8 hover:bg-accent">
      <div
        tabIndex={0}
        role="button"
        className="bg-transparent border-none shadow-none text-white font-[Electrolize] flex gap-2 relative "
        onClick={toggleDropdown}
      >
        {children}
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[450px] grid grid-cols-3 p-2 shadow lg:mt-4 absolute -left-36  "
        >
          {platforms &&
            platforms.results.map((platform,index) => {
           
              return (
              
                  <li key={platform.id}>
                    <NavLink
                      to={`/platforms/${platform.id}/${platform.slug}/${index}`}
                      className={isActive}
                      onClick={handleClick} 
                    >
                      {" "}
                      {platform.name}
                    </NavLink>
                  </li>
              
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default DropPlatforms;
