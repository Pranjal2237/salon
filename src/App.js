import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Booking, User, Appointments } from "./pages";
import { Navigation } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const [isFutureAppointment, setIsFutureAppointment] = useState(true);
  useEffect(() => {
    async function refresh() {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:4000/api/user/refresh", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      }
    }
    refresh();
  }, []);
  return (
    <BrowserRouter>
      <Navigation
        name={user?.name}
        setUser={setUser}
        setIsFutureAppointment={setIsFutureAppointment}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online-booking" element={<Booking />} />
        <Route path="/user" element={<User user={user} setUser={setUser} />} />
        <Route
          path="/appointments"
          element={
            <Appointments
              isFutureAppointment={isFutureAppointment}
              setIsFutureAppointment={setIsFutureAppointment}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
