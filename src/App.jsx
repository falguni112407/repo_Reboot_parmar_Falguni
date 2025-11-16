// src/AppContent.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import AutoLanguageScreen from './pages/AutoLanguageScreen';
import MobileLogin from './pages/MobileLogin';
import OtpAutoVerify from './pages/OtpAutoVerify';
import SelectCategory from './pages/SelectCategory';
import FarmerEducationPage from './pages/FarmerEducationPage';
import LanguageSelector from './components/LanguageSelector';
import EducatePage from "./pages/EducatePage";
import Investor from "./pages/Investor";
import CarbonCreditBuyers from "./pages/CarbonCreditBuyers";
import FPOs from "./pages/FPOs"
import InstitutionalBuyers from "./pages/InstitutionalBuyers"
function AppContent() {
  const { pathname } = useLocation();
  const hideLanguageSelector =
  pathname === "/farmer-dashboard" || pathname === "/other";


  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">

          {!hideLanguageSelector && <LanguageSelector />}

          <Routes>
            <Route path="/" element={<AutoLanguageScreen />} />
            <Route path="/login" element={<MobileLogin />} />
            <Route path="/verify-otp" element={<OtpAutoVerify />} />
            <Route path="/select-category" element={<SelectCategory />} />
            <Route path="/farmer-dashboard" element={<FarmerEducationPage />} />
            <Route path="/other" element={<EducatePage/>} />
            <Route path="/inverster" element={<Investor/>} />
            <Route path="/carbon-credit" element={<CarbonCreditBuyers/>} />
            <Route path="/fpos" element={<FPOs/>} />
            <Route path="/institutionalbuyers" element={<InstitutionalBuyers/>} />
          </Routes>

        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default AppContent;
