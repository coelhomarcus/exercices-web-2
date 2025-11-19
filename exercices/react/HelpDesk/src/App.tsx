import { Routes, Route } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="bg-[url(./assets/bg.png)] min-h-screen bg-cover md:grid md:grid-cols-2">
      <div className="pb-10 md:pb-0">{/* empty */}</div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
