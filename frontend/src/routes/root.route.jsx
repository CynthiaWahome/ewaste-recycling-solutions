import LandingPage from '../pages/Landing.page';
import PageNotFound from '../pages/PageNotFound.page';
import { Routes, Route } from 'react-router-dom';

const RootRouter = () => {
  return (
    <Routes>
      <Route path='/' index element={<LandingPage />} />
      <Route path='*' index element={<PageNotFound />} />
    </Routes>
  );
};

export default RootRouter;
