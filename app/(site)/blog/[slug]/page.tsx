import { pool } from '@/lib/db';
import { notFound } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  tags: string[];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { rows } = await pool.query<Post>('SELECT * FROM posts WHERE slug = $1', [params.slug]);
  
  if (!rows.length) {
    notFound();
  }

  const post = rows[0];

  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-4 prose">
        {post.content}
      </div>
    </article>
  );
}