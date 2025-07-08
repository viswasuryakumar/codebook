// server.js
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();
const rules = path.join(__dirname, 'data', 'routes.json');

app.db = router.db;

app.use(middlewares);
app.use(auth.rewriter(rules));
app.use(auth);
app.use(router);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`JSON Server with Auth is running on http://localhost:${PORT}`);
});
