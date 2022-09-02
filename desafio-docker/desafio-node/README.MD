# Node JS

Application ...

## To create enviroment

    cd src
    docker run --rm -it -v ~/dev/workspace_pessoal/desafio-docker/desafio-node/src/:/usr/src/app -p 3000:3000 node:15 bash
    cd /usr/src/app
    npm init
    npm install express -y
    npm install mysql -y
    
## Access DB container and create table:

    mysql -u root -p
    password root...
    use nodedb;
    create table people(id int not null auto_increment, name varchar(255), primary key (id));
    desc people;

## Access Node container and instal mysql client:
    
    npm install mysql --save

## Using dockerize:

    dockerize -wait tcp://db:3306 -timeout 50s

## To run project:

    docker-compose up --build -d
    
    call url: localhost:8080