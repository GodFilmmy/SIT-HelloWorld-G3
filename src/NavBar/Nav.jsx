import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";


function TopNavBar() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
    window.scrollTo({ top: 0 });
  };



  return (
    <div className="top-nav bg-[#f1f1f1] w-full fixed h-[88px] z-30 top-0 left-0 flex items-center justify-between px-6 lg:gap-7">
      <div className="nav-left flex items-center basis-1/3">
        <div className="nav-sitIcon">
          <a onClick={handleGoHome}><img src="SitLogo.png" className="w-[391px]" alt="Site Logo" /></a>
        </div>
      </div>
      <div className="nav-right flex items-center basis-2/3 justify-end lg:gap-3 gap-2">
       
      </div>
    </div>
  );
}

export default TopNavBar;
