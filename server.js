// Server create and configurations
const express = require('express');
const server = express();

const db = require('./database');

// Static files config
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }));

// Nunjucks Configs
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
  express: server,
  noCache: true
});

// Routes
server.get('/', function(request, response) {
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) {
      console.log(err)
      return response.send("Erro no banco de dados!")
    }
    
    const reversedIdeas = [...rows].reverse()
    let lastIdeas = [];
    for (let idea of reversedIdeas) {
      if (lastIdeas.length < 2) {
        lastIdeas.push(idea);
      };
    };

    return response.render('index.html', { ideas: lastIdeas });
  });
});

server.get('/ideas', function(request, response) {
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) {
      console.log(err)
      return response.send("Erro no banco de dados!")
    }

    const reversedIdeas = [...rows].reverse()
    return response.render('ideas.html', { ideas: reversedIdeas });
  });
});

server.post('/', function(request, response) {
  
  const query = `
    INSERT INTO ideas(
      image,
      title,
      category,
      description,
      link
    ) VALUES(?, ?, ?, ?, ?);`

  const values = [
    request.body.image,
    request.body.title,
    request.body.category,
    request.body.description,
    request.body.link
  ]

  db.run(query, values, function(err) {
    if (err) {
      console.log(err)
      return response.send("Erro no banco de dados!")
    }

    return response.redirect('/ideas');
  });
});

// Port to start server
server.listen(3333);