import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(middlewares);

// маршрут для фільтрації готелів
server.get('/hotels', (req, res) => {
  const { city } = req.query;
  console.log('Query parameters:', req.query);

  const hotels = router.db.get('hotels').value();

  const filteredHotels = hotels.filter(hotel => {
    let isValid = true;

    if (city) {
      isValid = isValid && hotel.city.toLowerCase() === city.toLowerCase();
    }

    return isValid;
  });

  res.json(filteredHotels);
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
