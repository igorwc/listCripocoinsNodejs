var express = require('express');
;
var router = express.Router();
require('dotenv/config');

const getData = async () => {
 
  let url =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    process.env.API_KEY;

  const rp = require('request-promise');
  const requestOptions = {
    method: 'GET',
    uri: url,  
    json: true,
    gzip: true,
  };

  return rp(requestOptions)
    .then((response) => {
      console.log('API call response:', response);
      return response;
    })
    .catch((err) => {
      console.log('API call error:', err.message);
    });
  
};
const fetch = require('node-fetch');

/* GET home page. */

router.get('/api', async function (req, res, next) {
  const response = await getData();
  res.json(response);
});

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
