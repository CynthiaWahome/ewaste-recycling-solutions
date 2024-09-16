const { PORT } = require('./config/secrets.config');

const app = require('./server');

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
