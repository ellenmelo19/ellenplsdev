import { Pool } from '@neondatabase/serverless';

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function getPosts() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM posts ORDER BY created_at DESC');
    return rows;
  } finally {
    client.release();
  }
}

export async function getPostBySlug(slug: string) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM posts WHERE slug = $1', [slug]);
    return rows[0] || null;
  } finally {
    client.release();
  }
}



// Para operações no modo Edge:
export const runtime = 'edge';