import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { ReactNode, useContext, useState } from "react";
import { PageContext } from "../../context/PageContext";
import { Result } from "../../types/interfaces";



const DropPlatforms = ({ children}:  { children: ReactNode }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const {data: platforms} = useFetch<Result>(
    ` https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
  );

  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  const isActive = (obj: {isActive: boolean}) =>
    obj.isActive ? 'text-white  bg-accent p-3 rounded-none px-8 text-center flex justify-center' : 'text-white p-3 rounded-none px-8 hover:bg-accent text-center flex justify-center';

  const {setIDPlat,startPage,setPage, btnActive, setBtnActive } = context;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () =>{
    setIsOpen((prev) => !prev);
    setBtnActive(true)
    
  } 
  

  const handleClick = ()=>{

    setIsOpen(false);
    setPage(1);
    startPage();
    setIDPlat(0)
    setBtnActive("All")
  }
// console.log(results);

  return (
    <div className={btnActive ? "dropdown  dropdown-bottom text-white p-3 rounded-none px-8 bg-accent " : "dropdown  dropdown-bottom text-white p-3 rounded-none px-8 hover:bg-accent " } >
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
          className="dropdown-content menu bg-base-100 rounded-box z-[1] sm:w-[450px] w-[350px] grid grid-cols-3 p-2 shadow lg:mt-4 absolute lg:-left-36  -left-0 "
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
