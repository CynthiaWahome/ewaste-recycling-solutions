import LandingPage from '../pages/Landing.page';
import NotFoundPage from '../pages/NotFound.page';
import { Routes, Route } from 'react-router-dom';

const RootRouter = () => {
  return (
    <Routes>
      <Route path='/' index element={<LandingPage />} />
      <Route path='*' index element={<NotFoundPage />} />
    </Routes>
  );
};

export default RootRouter;
