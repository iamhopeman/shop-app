import db from '$lib/db';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
    const history = db.prepare('SELECT * FROM history ORDER BY timestamp DESC').all();
    return new Response(JSON.stringify(history), { status: 200 });
};