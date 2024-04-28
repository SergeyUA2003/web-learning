import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';

const server = jsonServer.create();
const router = jsonServer.router('src/json-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = router.db.get('users').find({ email, password }).value();

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ sub: user.email, name: user.name, roles: user.roles }, 'ZelL3R3CY/qLbotX2eiBtbV6fjxtkh93iwJSsbnZS64=');
  res.json({ token });
});

server.post('/auth/register', (req, res) => {
  const modifiedBody = { ...req.body, roles: ['USER'] };

  req.url = '/users';
  req.method = 'POST';
  req.body = modifiedBody;
  router.handle(req, res);
})

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
