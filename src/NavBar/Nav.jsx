import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import ReservationBtn from "../Reservation-Btn";
function TopNavBar() {
  const navigate = useNavigate();
  const handleGoHome = () => {
  navigate("/");
  }
  return (
    <div className="top-nav bg-[#f1f1f1] w-full fixed h-[88px] z-30 top-0 left-0 flex items-center justify-between px-6 gap-7">
      <div className="nav-left flex items-center basis-1/3">
        <div className="nav-sitIcon">
          <img src="SitLogo.png" className="w-[391px]" alt="Site Logo" />
        </div>
      </div>

      <div className="nav-right flex items-center basis-2/3 justify-end lg:gap-3 gap-2">
        <div className="searchbar-icon invisible lg:visible">
          <FaSearch />
        </div>
        <div className="nav-searchbar w-full max-w-[400px]">
          <input
            type="text"
            className="p-2 border rounded w-full bg-white"
            placeholder="Search...."
          />
        </div>
        <div>
          <button onClick={handleGoHome} className="bg-white p-3 border rounded text-xl hover:border-2">
            <FaHome />
          </button>
        </div>
        <div>
          <ReservationBtn/>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
