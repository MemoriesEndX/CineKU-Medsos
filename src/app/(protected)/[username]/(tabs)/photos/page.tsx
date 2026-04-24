import { GetVisualMedia } from '@/types/definitions';
import prisma from '@/lib/prisma/prisma';
import { fileNameToUrl } from '@/lib/s3/fileNameToUrl';
import { getProfile } from '../../getProfile';
import { Gallery } from './Gallery';

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profile = await getProfile(username);
  return {
    title: `Photos | ${profile?.name}` || 'Photos',
  };
}

async function getVisualMedia(username: string) {
  const profile = await getProfile(username);
  if (!profile) return [];

  const visualMedia = await prisma.visualMedia.findMany({
    where: {
      userId: profile.id,
    },
    orderBy: {
      id: 'desc',
    },
  });

  return visualMedia.map((item) => ({
    type: item.type,
    url: fileNameToUrl(item.fileName)!,
  })) as GetVisualMedia[];
}

export default async function Page({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const visualMedia = await getVisualMedia(username);
  return <Gallery visualMedia={visualMedia} />;
}
