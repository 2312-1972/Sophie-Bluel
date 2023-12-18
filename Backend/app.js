const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocs = yaml.load('swagger.yaml');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Ajout de la route pour la racine ("/")
app.get('/', (req, res) => {
  // Logique pour gérer la page d'accueil
  res.send('Bienvenue sur la page d\'accueil!');
});

app.use('/api/users', require('./routes/user.routes'));
app.use('/api/categories', require('./routes/categories.routes'));
app.use('/api/works', require('./routes/works.routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const db = require('./models');
db.sequelize.sync().then(() => console.log('La base de données est prête.'));

module.exports = app;
