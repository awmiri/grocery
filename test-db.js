const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

sql`select 1 as ok`
  .then((r) => console.log("OK:", r))
  .catch((e) => console.error("ERROR:", e.message));
