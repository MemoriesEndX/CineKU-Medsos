import { updateProfileAndCoverPhoto } from '@/hooks/useUpdateProfileAndCoverPhoto';

export async function POST(request: Request, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  return updateProfileAndCoverPhoto({
    request,
    toUpdate: 'coverPhoto',
    userIdParam: userId,
  });
}
