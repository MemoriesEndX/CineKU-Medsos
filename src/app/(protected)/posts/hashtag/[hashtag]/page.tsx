import { Posts } from '@/components/Posts';

export default async function Page({ params }: { params: Promise<{ hashtag: string }> }) {
  const { hashtag } = await params;
  return (
    <div className="px-4 pt-4">
      <h1 className="mb-4 text-4xl font-bold">#{hashtag}</h1>
      <Posts type="hashtag" hashtag={hashtag} />
    </div>
  );
}
