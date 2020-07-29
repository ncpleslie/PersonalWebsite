require('./src/util/website_data').init('../../website_data.json');
const app = require('./src/app');

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`[Console] Server Created on port: ${port}`);
});