import { d as db } from './db-BurE0sxd.js';
import 'better-sqlite3';
import 'path';

const GET = () => {
  const history = db.prepare("SELECT * FROM history ORDER BY timestamp DESC").all();
  return new Response(JSON.stringify(history), { status: 200 });
};

export { GET };
//# sourceMappingURL=_server.ts-DHf1jSX1.js.map
