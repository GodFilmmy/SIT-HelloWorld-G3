import { useNavigate } from "react-router-dom";
function ReservationBtn() {
const navigate = useNavigate();
const handleFormBtn = () =>{
    navigate("/form");
    window.scrollTo({top:0});
}
  return (
    <button onClick={handleFormBtn} className="bg-white p-2 border items-center rounded inline  hover:border-2">
      +จองห้อง
    </button>
  );
}
export default ReservationBtn;
