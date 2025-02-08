import "./App.css";
import HomePage from "./HomePage/HomePage";
import ReservationForm from "./ReservationForm/ReservationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import TopNavBar from "./NavBar/Nav";
import ScheduleResult from "./SchedulePage/Schedulepage";
import { ReversationProvider } from "./contexts/useReversation";
// import BookingSuccess from "./ReservationForm/BookingSucces";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/schdule" element={<ScheduleResult />} />
          {/* <Route path="/book" element={<BookingSuccess/>} /> */}
          <Route
            path="/form"
            element={
              <ReversationProvider>
                <ReservationForm />
              </ReversationProvider>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
