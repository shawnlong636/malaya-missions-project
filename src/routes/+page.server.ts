import type { PageServerLoad } from './$types';
// import { POSTGRES_URL } from '$env/static/private';
// import { createPool } from '@vercel/postgres';

export const load = (async () => {
    // const db = createPool({
    //     connectionString: POSTGRES_URL
    // });
    // const { rows: users } = await db.query('SELECT * FROM users');
    return {};
}) satisfies PageServerLoad;
