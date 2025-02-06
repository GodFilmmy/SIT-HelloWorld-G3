import "./App.css";
import HomePage from "./HomePage/HomePage";
import ReservationForm from "./ReservationForm/ReservationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import TopNavBar from "./NavBar/Nav";
import ScheduleResult from "./SchedulePage/Schedulepage";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavBar></TopNavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<ReservationForm />} />
          <Route path="/schdule" element={<ScheduleResult />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
