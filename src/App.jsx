import {Routes,Route,Navigate} from "react-router-dom";
import LoginPage from "./Logpage/Loginpage";
import SignupPage from "./Logpage/SignupPage";

function App() {

  return (
   <div className="grid w-full bg-gray-200 h-screen place-items-center ">
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
  </div>
  );

}

export default App
  