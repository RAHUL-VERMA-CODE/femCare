import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing.jsx";
import AuthPage from "./components/signin&signUp.jsx";
import YogaLandingPage from "./pages/yoga.jsx";
import Appointment from "./components/appointment.jsx";
import DoctorConsultation from "./pages/Consultant.jsx";
import HealthQuestionnaire from "./pages/healthForm.jsx";
import ToolsGrid from "./pages/tools.jsx";
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup&signin" element={<AuthPage />} />
      <Route path="/yoga" element={<YogaLandingPage/>}></Route>
      <Route path="/appointment" element={<Appointment/>}></Route>

      <Route path="/consultantPage" element={<DoctorConsultation/>}></Route>
      <Route path="/healthForm" element={<HealthQuestionnaire/>}></Route>
      <Route path="/tools" element={<ToolsGrid/>}></Route>
    </Routes>
  );
}

export default App;

