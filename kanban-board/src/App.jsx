import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import StartUpLayout from "./components/StartUpLayout";
import Signup from "./pages/Signup";
import Mailverify from "./pages/Mailverify";
import OtpVerify from "./pages/OtpVerify";
import ResendVerification from "./pages/ResendVerification";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/" element={<StartUpLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mailverify/:token" element={<Mailverify />}></Route>
          <Route path="/otpverify/:email" element={<OtpVerify />}></Route>
          <Route path="/resend" element={<ResendVerification />}></Route>
          <Route path="/forgotpass" element={<ForgotPass />}></Route>
          <Route path="/resetpass/:token" element={<ResetPass />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
