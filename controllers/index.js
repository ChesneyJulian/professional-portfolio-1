const router = require('express').Router();
const fs = require('fs');


router.get('/', (req, res) => {
  res.render('landing-page');
})

router.get('/projects/:index', (req, res) => {
  fs.readFile('./data/projects.json', 'utf8', (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const parsedData = JSON.parse(data);
      const name = parsedData.projects[req.params.index].name;
      const description = parsedData.projects[req.params.index].description;
      const skills = parsedData.projects[req.params.index].skills;
      const methods = parsedData.projects[req.params.index].methods;
      console.log(methods);

      res.render('case-study', {name, description, skills, methods});
    }
  });
})

module.exports = router;