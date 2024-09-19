import LandingPage from '../pages/Landing.page';
import PageNotFound from '../pages/PageNotFound.page';
import LoginPage from '../pages/Login.page';
import SignupPage from '../pages/Signup.page';
import ResetPage from '../pages/Reset.page';
import Dashboard from '../pages/Dashboard.page';
import EWastePickupFlow from '../pages/NewPickup.page';
import VerificationPage from '../pages/Verification.page';
import History from '../pages/History.page';
import ProfilePage from '../pages/Profile.page';
import NotificationsPage from '../pages/Notifications.page';
import ForgotPasswordPage from '../pages/ForgotPassword.page';
import PrivateRoute from './Private.route';

import { Routes, Route } from 'react-router-dom';

const RootRouter = () => {
  return (
    <Routes>
      <Route path='/' index element={<LandingPage />} />
      <Route path='/account/login' element={<LoginPage />} />
      <Route path='/account/signup' element={<SignupPage />} />
      <Route path='/account/forgot' element={<ResetPage />} />
      <Route path='/account/reset' element={<ForgotPasswordPage />} />
      <Route path='/account/notifications' element={<NotificationsPage />} />
      <Route path='/account/verify/:id' element={<VerificationPage />} />
      <Route path='/pickup/new' element={<EWastePickupFlow />} />
      <Route path='/pickup/history' element={<History />} />
      <Route
        path='/account/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path='/account/profile'
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route path='*' index element={<PageNotFound />} />
    </Routes>
  );
};

export default RootRouter;
