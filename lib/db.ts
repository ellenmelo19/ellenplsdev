import { Pool } from '@neondatabase/serverless';

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

export async function getPosts() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM posts ORDER BY created_at DESC');
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  } finally {
    client.release();
  }
}