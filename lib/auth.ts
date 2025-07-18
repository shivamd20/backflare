import { getServerSession } from 'next-auth/next';
import { NextApiRequest } from 'next';

export async function getSessionUser(req: NextApiRequest) {
  const session = await getServerSession(req);
  if (!session?.user) {
    return null;
  }
  return {
    id: session.user.email,
    email: session.user.email,
    name: session.user.name,
    image: session.user.image,
  };
}