// Server create and configurations
const express = require('express');
const server = express();

// Static files config
server.use(express.static('public'))

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Casamentiss faiz malandris se pirulitá. Detraxit consequat et quo num tendi nada. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.",
    url: "http://www.rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios Físicos",
    category: "Saúde",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mé faiz elementum girarzis, nisi eros vermeio. Diuretics paradis num copo é motivis de denguis. Delegadis gente finis, bibendum egestas augue arcu ut est.",
    url: "http://www.rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mé faiz elementum girarzis, nisi eros vermeio.",
    url: "http://www.rocketseat.com.br"
  }
];

// Nunjucks Configs
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
  express: server,
  noCache: true
});

// Routes
server.get('/', function(request, response) {
  const reversedIdeas = [...ideas].reverse()

  let lastIdeas = [];
  for (let idea of reversedIdeas) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea);
    };
  };

  return response.render('index.html', { ideas: lastIdeas });
});

server.get('/ideas', function(request, response) {
  const reversedIdeas = [...ideas].reverse()
  return response.render('ideas.html', { ideas: reversedIdeas });
});

// Port to start server
server.listen(3333);