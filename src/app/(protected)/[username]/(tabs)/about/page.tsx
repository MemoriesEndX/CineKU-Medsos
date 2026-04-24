import { getProfile } from '../../getProfile';
import { About } from './About';

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profile = await getProfile(username);
  return {
    title: `About | ${profile?.name}` || 'About',
  };
}

export default async function Page({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profile = await getProfile(username);
  if (!profile) return null;

  return (
    <div className="mt-4">
      <About profile={profile} />
    </div>
  );
}
