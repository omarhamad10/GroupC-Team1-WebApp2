const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Azure App Service 🚀</h1>
    <p>Deployed by Omar Hammad</p>
    <p>Instance: ${process.env.WEBSITE_INSTANCE_ID || 'local'}</p>
    <p>Time: ${new Date().toISOString()}</p>
  `);
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(port, () => console.log(`Listening on ${port}`));
