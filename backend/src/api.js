const { PORT } = require('./config/secrets.config');

const app = require('./server');

app.get('/api/v1/status', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'API is running',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
