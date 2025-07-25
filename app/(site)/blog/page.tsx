import { getPosts } from '@/lib/db';

interface Post {
  id: string | number;
  title: string;
  content: string;
  tags?: string[];
}

export default async function Blog() {
  const posts: Post[] = await getPosts();

  // Adicione este console.log para debug
  console.log('Posts from DB:', posts);

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="font-mono text-3xl mb-8">Blog</h1>
        <p>Nenhum post encontrado. Adicione posts via Painel do Neon.</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="font-mono text-3xl mb-8">Blog</h1>
      <div>
        {posts.map((post) => (
          <article key={post.id} className="mb-8 p-4 border rounded-lg">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            {post.tags && (
              <div className="mt-3 flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-pixel-green text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}

