const express = require('express'); //importiert express modul
const app = express(); //und bildet eine Express-Application
const server = require('http').createServer(app);//importiert http modul und bildet Server
const io = require('socket.io').listen(server);//Socket-Bildung Anbindung an Server
/*
die json datei players wird eingelesen
*/
var players = require('./players.json');

/*

 die dateien (bilder, skripte, css und html dokumente (public ordner))
  werden statisch aus dem jeweiligen Verzeichnis geladen
  kann später so "GET localhost/style.css" aufgerufen werden
  */
app.use(express.static(__dirname + '/public'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/javascript', express.static(__dirname + '/javascript'));
app.use('/css', express.static(__dirname + '/css'));



/*
 So wird die index.html Datei beim Zugriff auf den Server (http://127.0.0.1:1337/) ausgegeben
 Die index.html wird beim Zugriff auf den Server ausgegeben
 */

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/home.html');
});


/* Als erstes Favoriten, dann die suche und dann alle ausgegeben */
app.route('/api/players').get((req, res)=> {
    var json = 0;
    if (req.query.favorites === 'true') {
        json = players.filter((x)=> {
            return x.favorit === true;
        });
        res.send(json);
    }
    /*
    search funktion : query = http://127.0.0.1:1337/api/players? (favorites=true)
    */
    else if (req.query.search) {
      /*
        x stellt Jason-Objekte dar und vergleicht diese auf Anfangsbuchstaben
      */
        json = players.filter((x)=> {
            return x.name.charAt(0).toLowerCase() === req.query.search.toLowerCase();
        });
        res.send(json);
    } else {
        res.send(players);
    }
});
/*
 Spieler speichern
 */
app.route('/api/players').post((req, res)=> {
    res.json({
        message: 'Spieler wurde gespeichert'
    });
});
/*
 Spieler updaten
 */
app.route('/api/players/:id').put((req, res)=> {
    res.json({
        message: ' Der Spieler mit der ID ' + req.params.id + ' wurde geupdatet'
    });
});
/*
 Spieler löschen
 */
app.route('/api/players/:id').delete((req, res)=> {
    var removedPlayer = false;
    for (var i in players) {
        if (req.params.id === players[i]._id) {
            players.splice(i, 1);
            removedPlayer = true;
        }
    }
    if (removedPlayer === true) {
        res.json({message: 'Spieler:' + req.params.id + ' wurde erfolgreich gelöscht'})
    } else {
        res.json({message: 'Spieler:' + req.params.id + ' wurde nicht gefunden'})
    }
});

/*
Ab hier Backend am
 Websockets
 */
io.on('connection', (socket) => {
    var addedUsername = false;
    socket.on('nutzerHinzufugen', (username) => {
        if (addedUsername) {
            return;
        }
// Username wird in der Socket Session vermerkt
        socket.username = username;
        addUsername = true;
        io.emit('nutzerBeitreten', {
            username: socket.username
        });
        console.log('User: ' + socket.username);
    });

    socket.on('neueNachricht', (data) => {
        io.emit('neueNachricht', {
            username: socket.username,
            message: data
        });
        console.log('Message:' + data);
    });
});

//Server auf port 1337
server.listen(1337);
console.log('Der Server läuft nun unter http://127.0.0.1: 1337');
