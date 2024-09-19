import Footer from '../components/footer/Footer.component';
import AuthHeader from '../components/header/AuthHeader.component';
import UserDashboard from '../components/dashboard/UserDashboard.component';
import CollectorDashboard from '../components/dashboard/CollectorDashboard.component';
import { useAuth } from '../hooks/auth';

const Dashboard = () => {
  const { getUser } = useAuth();
  const user = JSON.parse(getUser());

  return (
    <>
      <AuthHeader />
      {user.role === 'user' ? <UserDashboard /> : <CollectorDashboard />}
      <Footer />
    </>
  );
};

export default Dashboard;
