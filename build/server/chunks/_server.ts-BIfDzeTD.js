import { d as db } from './db-BurE0sxd.js';
import 'better-sqlite3';
import 'path';

const GET = () => {
  const items = db.prepare("SELECT * FROM shopping_list").all();
  return new Response(JSON.stringify(items), { status: 200 });
};
const POST = async ({ request }) => {
  const { item } = await request.json();
  db.prepare("INSERT INTO shopping_list (item) VALUES (?)").run(item);
  return new Response("Item added", { status: 201 });
};
const DELETE = async ({ request }) => {
  const { id } = await request.json();
  const item = db.prepare("SELECT * FROM shopping_list WHERE id = ?").get(id);
  if (item) {
    db.prepare("DELETE FROM shopping_list WHERE id = ?").run(id);
    db.prepare("INSERT INTO history (item) VALUES (?)").run(item.item);
    return new Response("Item removed", { status: 200 });
  }
  return new Response("Item not found", { status: 404 });
};

export { DELETE, GET, POST };
//# sourceMappingURL=_server.ts-BIfDzeTD.js.map
