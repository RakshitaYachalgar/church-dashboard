import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import RegisterStep1 from "./pages/auth/RegisterStep1"
import RegisterStep2 from "./pages/auth/RegisterStep2"
import Contact from "./pages/Contact";
/*import ChurchOnboarding from "./pages/ChurchOnboarding";*/
import ChurchRegistration from "./pages/auth/ChurchRegister"
import RegisterRole from "./pages/auth/RegisterRole"
import PendingApproval from "./pages/PendingApproval";

import ChurchLayout from "./church/layout/ChurchLayout";
import Dashboard from "./church/pages/Dashboard";
import Members from "./church/pages/Members";
import Employees from "./church/pages/Employees";
import Events from "./church/pages/Events";
import Requests from "./church/pages/Requests";
import Profile from "./church/pages/Profile";
import Givings from "./church/pages/Givings";
import MemberDetails from "./church/pages/MemberDetails";
import CommunityPartnerRegister from "./pages/auth/CommunityPartnerRegister";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      
        <Route path="/login" element={<Login />} />
         <Route path="/RegisterStep1" element={<RegisterStep1 />} />
      <Route path="/RegisterStep2" element={<RegisterStep2 />} />
        <Route path="/church-register" element={<ChurchRegistration />} />
        <Route path="/RegisterRole" element={<RegisterRole />} />
        <Route path="/church/pending" element={<PendingApproval />} />
        <Route path="community-partner-register" element={<CommunityPartnerRegister />} />

      <Route path="/church" element={<ChurchLayout />}>
<Route path="dashboard" element={<Dashboard />} />
  <Route path="members" element={<Members />} />
  <Route path="employees" element={<Employees />} />
  <Route path="events" element={<Events />} />
  <Route path="requests" element={<Requests />} />
  <Route path="profile" element={<Profile />} />
  <Route path="givings" element={<Givings />} />
  <Route path="members/:id" element={<MemberDetails />} />
  


</Route>
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
