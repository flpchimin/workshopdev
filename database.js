const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./wsdev.db');

db.serialize(function() {
  // Create table
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `);

  /*
  // Insert data
  const query = `
    INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) VALUES(?, ?, ?, ?, ?);`

  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Curso de Programação",
    "Estudo",
    "Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Casamentiss faiz malandris se pirulitá. Detraxit consequat et quo num tendi nada. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.",
    "http://www.rocketseat.com.br"
  ]

  db.run(query, values, function(err) {
    if (err) return console.log(err)
    //console.log(this);
  });

  // Delete data
  db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    if (err) return console.log(err)
    //console.log("Deleted", this)
  });

  // Get data
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err)
    //console.log(rows);
  });

  */
});

module.exports = db;