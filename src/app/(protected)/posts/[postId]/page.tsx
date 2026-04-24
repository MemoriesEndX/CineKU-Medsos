'use client';

import { Post } from '@/components/Post';
import { use, useCallback, useState } from 'react';

export default function Page({ params }: { params: Promise<{ postId: string }> }) {
  const { postId: postIdParam } = use(params);
  const postId = parseInt(postIdParam, 10);
  const [commentsShown, setCommentsShown] = useState(true);

  const toggleComments = useCallback(() => setCommentsShown((prev) => !prev), []);

  return (
    <div className="m-4">
      <Post id={postId} commentsShown={commentsShown} toggleComments={toggleComments} />
    </div>
  );
}
