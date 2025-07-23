import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AdminPanel from "./pages/AdminPanel";
import EventTicket from "./pages/EventTicket";
import UserDashboard from "./pages/UserDashboard";
import AllEvents from "./components/AllEvents";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Events/:id" element={<EventDetails />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
            <Route path="/ticket/:eventId" element={<EventTicket />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/events" element={<AllEvents />} />

            
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
