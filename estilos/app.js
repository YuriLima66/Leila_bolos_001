const express = require ('express');

//express aplicativo - configurando as funções
const app = express();
app.set('view engine', 'ejs');


//acessando a rota
app.get('/', (req, res) => {

//passando parâmetro head
res.render('index', { titulo: 'Home' });
});

//nova rota
app.get('/sobre', (req, res) => {
    //res.sendFile('./views/sobre.html', { root: __dirname});
    res.render('sobre', { titulo: 'Sobre'});
});

//redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('/historia.ejs');
});

app.get('/blog/criar', (req, res) =>{
res.render('criar', { titulo: 'Criar novo Blog'});
});


app.use((req, res) =>{
//res.status(400).sendFile('./views/404.html', { root: __dirname});
res.status(404).render('404');
});

app.listen(3007);