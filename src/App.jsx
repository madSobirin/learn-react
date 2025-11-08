import { Dashboard } from "./pages/Dashboard";
import { Team } from "./pages/Team";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
};
export default App;
