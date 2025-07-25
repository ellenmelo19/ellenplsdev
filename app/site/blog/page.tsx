import { getPosts } from '@/lib/db';
import Link from 'next/link';



export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="font-mono text-3xl mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border p-4 rounded-lg hover:shadow-lg transition">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.content.substring(0, 150)}...</p>
              <div className="mt-3 flex gap-2">
                {post.tags?.map((tag: string) => (
                  <span key={tag} className="px-2 py-1 bg-pixel-green text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}