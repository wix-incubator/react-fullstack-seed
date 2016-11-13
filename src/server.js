import express from 'express';
import ejs from 'ejs';
import Promise from 'bluebird';
import 'babel-polyfill';

module.exports = () => {
  const app = express();

  app.get('/sites', (req, res) => {
    setTimeout(() => {
      res.json([
        {id: 1, siteName: 'Site 1'},
        {id: 2, siteName: 'Site 2'}
      ]);
    }, 500);
  });

  app.get('/', async (req, res) => {
    const templatePath = './src/index.ejs';
    const data = {
      title: 'Wix Full Stack Project Boilerplate',
      staticsBaseUrl: 'http://localhost:3200/', //TODO: fix
      baseurl: 'http://localhost:3000/' //TODO: fix
    };

    const renderFile = await Promise.promisify(ejs.renderFile, {context: ejs});

    const htmlData = await renderFile(templatePath, data);

    res.send(htmlData);
  });

  return app;
};
