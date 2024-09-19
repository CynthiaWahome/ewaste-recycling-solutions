import CollectorDashboard from '../components/dashboard/CollectorDashboard.component';
import Footer from '../components/footer/Footer.component';
import AuthHeader from '../components/header/AuthHeader.component';

const CollectorPage = () => {
  return (
    <>
      <AuthHeader />
      <CollectorDashboard />
      <Footer />
    </>
  );
};

export default CollectorPage;
