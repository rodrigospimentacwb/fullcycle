const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlCreateTable = `create table IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key (id))`
const sqlInsert = `INSERT INTO people(name) values ('Rodrigo S. Pimenta')`
const sqlSelect = `SELECT name FROM people`


connection.query(sqlCreateTable)
connection.query(sqlInsert)
const rows = connection.query(sqlSelect);

app.get('/', (req,res) => {
    
    fullText = "</p><p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p><p></p>"
    connection.query(sqlSelect, function(err, rows, fields) 
    {
        if (err) throw err;
        rows.forEach(people => {
            fullText += "<p>- " + people.name + ".</p>";
        });
        fullText += "</p><p>"
        res.send(fullText);
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})