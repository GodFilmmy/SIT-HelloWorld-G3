import "./App.css";
import HomePage from "./HomePage/HomePage";
import Page from "./Main/Page";
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
          <Route path="/" element={
            <ReversationProvider>
              <HomePage/>
            </ReversationProvider>
          } />
          <Route path="/schedule" element={<ReversationProvider><ScheduleResult /></ReversationProvider>} />
          {/* <Route path="/book" element={<BookingSuccess/>} /> */}
          <Route
            path="/form"
            element={
              <ReversationProvider>
                <Page/>
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
