var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get(&#39;/location&#39;, function(req, res, next) {
    res.render(&#39;index&#39;, { title: &#39;Location info&#39; });
  });
  router.get(&#39;/location/review&#39;, function(req, res, next) {
    res.render(&#39;index&#39;, { title: &#39;Review&#39; });
  });
  router.get(&#39;/about&#39;, function(req, res, next) {
    res.render(&#39;index&#39;, { title: &#39;about&#39; });
  });
module.exports = router;
