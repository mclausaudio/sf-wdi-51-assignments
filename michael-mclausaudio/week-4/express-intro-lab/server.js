const express = require('express');
const app = express();

const albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ]; 

  const taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];

//Allowers CORS compatibility
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('public'));


//sets up a 'route' that listens for any GET requests to 'localhost:3000' 
app.get('/', (req, res) => {
    // console.log(req)
    //sends back a string with 'hello'
    // res.send('Hello')
    console.log(__dirname);
    res.sendFile('views/index.html', {root: __dirname});
})

app.get('/api/albums', (req, res)=>{
    res.json(albums);
})

app.get('/api/taquerias', (req, res)=>{
    res.json(taquerias);
})

//listens for requests on port process.env.port or 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server Running')
});

