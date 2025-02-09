import { useNavigate } from "react-router-dom";

function ReservationBtn({ roomName, floor }) {
  const navigate = useNavigate();
  
  const handleFormBtn = () => {
    navigate(`/form?room=${encodeURIComponent(roomName)}&floor=${encodeURIComponent(floor)}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      onClick={handleFormBtn}
      className="bg-white p-6 border rounded-lg inline hover:border-2 lg:text-5xl text-4xl"
    >
      จองห้อง
    </button>
  );
}

export default ReservationBtn;
