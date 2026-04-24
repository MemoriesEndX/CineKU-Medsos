import prisma from '@/lib/prisma/prisma';
import { FindUserResult, GetUser } from '@/types/definitions';
import { includeToUser } from '@/lib/prisma/includeToUser';
import { toGetUser } from '@/lib/prisma/toGetUser';
import { getServerUser } from '@/lib/getServerUser';

export async function getProfile(username: string) {
  const [user] = await getServerUser();

  // Get full profile data directly from DB to avoid server-side fetch to internal API route.
  const profile = (await prisma.user.findFirst({
    where: {
      username,
    },
    include: includeToUser(user?.id),
  })) as FindUserResult | null;

  if (!profile) return null;

  return toGetUser(profile) as GetUser;
}
