import { getUserSession } from '../../utils/auth';
import DashboardPage from '../../components/DashboardPage';

export default async function Dashboard() {
  const user = await getUserSession();

  return <DashboardPage user={user} />;
}
