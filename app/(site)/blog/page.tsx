import { pool } from '@/lib/db';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { rows: posts } = await pool.query('SELECT slug FROM posts');
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { rows } = await pool.query('SELECT * FROM posts WHERE slug = $1', [params.slug]);
  
  if (rows.length === 0) {
    notFound();
  }

  const post = rows[0];

  return (
    <article className="max-w-2xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="font-mono text-3xl font-bold">{post.title}</h1>
        <div className="flex gap-2 mt-3">
          {post.tags?.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-pixel-green text-xs rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="prose max-w-none">
        {post.content}
      </div>
    </article>
  );
}