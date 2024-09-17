import LandingPage from '../pages/Landing.page';
import NotFoundPage from '../pages/NotFound.page';
import LoginPage from '../pages/Login.page';
import SignupPage from '../pages/Signup.page';
import ResetPage from '../pages/Reset.page';

import { Routes, Route } from 'react-router-dom';

const RootRouter = () => {
  return (
    <Routes>
      <Route path='/' index element={<LandingPage />} />
      <Route path='/account/login' element={<LoginPage />} />
      <Route path='/account/signup' element={<SignupPage />} />
      <Route path='/account/reset' element={<ResetPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default RootRouter;
