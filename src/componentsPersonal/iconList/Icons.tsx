import { BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { SiCommodore, SiNintendo3Ds, SiNintendogamecube, SiPlaystation3, SiPlaystation4, SiPlaystation5, SiWii, SiIos, SiSega } from "react-icons/si";
import { SiMacos } from "react-icons/si";
import { MdVideogameAsset } from "react-icons/md";
import { LuComputer } from "react-icons/lu";
import { RiXboxLine } from "react-icons/ri";
import { LiaXbox } from "react-icons/lia";

export const Icons = {
    'PC': <FaWindows className="platform-icon" />,
    'Xbox One': <RiXboxLine className="platform-icon" />,
    'PlayStation 4': <SiPlaystation4 className="platform-icon" />,
    'Nintendo Switch': <BsNintendoSwitch className="platform-icon" />,
    'iOS': <SiIos className="platform-icon" />,
    'Android': <FaAndroid className="platform-icon" />,
    'macOS': <SiMacos className="platform-icon" />,
    'Linux': <FaLinux className="platform-icon" />,
    'Xbox 360': <FaXbox className="platform-icon" />,
    'PlayStation 3': <SiPlaystation3 className="platform-icon" />,
    'PlayStation': <FaPlaystation className="platform-icon" />,
    'PS Vita': <FaPlaystation className="platform-icon" />,
    'Nintendo 3DS': <SiNintendo3Ds className="platform-icon" />,
    'Wii U': <SiWii className="platform-icon" />,
    'Xbox Series S/X': <LiaXbox className="platform-icon" />,
    'PlayStation 5': <SiPlaystation5 className="platform-icon" />,
    'Commodore / Amiga': <SiCommodore className="platform-icon" />,
    'Game Boy Advance': <MdVideogameAsset className="platform-icon" />,
    'Classic Macintosh': <LuComputer className="platform-icon" />,
    'GameCube': <SiNintendogamecube className="platform-icon" />,
    'Apple II': <FaApple className="platform-icon" />,
    'Genesis': <SiSega className="platform-icon" />,
};