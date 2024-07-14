import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function getUserSession(req, res) {
  const { getUser } = getKindeServerSession(req, res);
  const user = await getUser();
  return user;
}
