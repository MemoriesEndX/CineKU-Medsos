import { DiscoverProfiles } from '@/components/DiscoverProfiles';
import { DiscoverSearch } from '@/components/DiscoverSearch';
import { DiscoverFilters } from '@/components/DiscoverFilters';
import { getProfile } from '../../getProfile';

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profile = await getProfile(username);
  return {
    title: `Followers | ${profile?.name}` || 'Followers',
  };
}

export default async function Page({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profile = await getProfile(username);

  return (
    <div className="p-4">
      <h1 className="mb-6 text-4xl font-bold">{profile?.name}&apos;s Followers</h1>
      <DiscoverSearch label="Search Followers" />
      <DiscoverFilters />
      <DiscoverProfiles followersOf={profile?.id} />
    </div>
  );
}
