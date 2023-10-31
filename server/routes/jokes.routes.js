const JokeControllers = require ('../controllers/jokes.controllers')


module.exports = app => {
  app.get('/api/alljokes', JokeControllers.getalljokes);
  app.post('/api/newjokes', JokeControllers.createJoke);
  app.get('/api/onejokes/:id', JokeControllers.findOneJoke);
  app.patch('/api/updatejoke/:id', JokeControllers.updateJoke);
  app.delete('/api/deletejoke/:id', JokeControllers.deleteJoke)
}