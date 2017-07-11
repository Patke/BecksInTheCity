$(document).ready(function () {
    var socket = io();
    var userEingabe = $('#name');
    var messages = $('#text');
    var username = '';


    /*
     Es wird ein neuer User hinzugefügt
     */
    function addUser() {
        username = userEingabe.val();
        if (username) {
            userEingabe.val('');
            socket.emit('nutzerHinzufugen', username);
        }
    }

    /*
     Die gewählte Nachricht wird abgeschickt, wenn Username und die Eingabe des Users existieren
     */
    function send() {
        var message = userEingabe.val();
        if (userEingabe && username) {
            userEingabe.val('');
            socket.emit('neueNachricht', message);
        }
    }

    /*
     Es wird entweder ein Formular abgeschickt oder ein neuer User angelegt
     */
    $('form').submit((e)=> {
        e.preventDefault();
        if (username) {
            send();
        } else {
            addUser();
        }
    });

    /*
     Was wird übertragen? Willkommen und der Username oder der Username + Nachricht
     */
    socket.on('nutzerBeitreten', (data)=> {
        messages.append('Willkommen: ' + data.username + '\n');
    });

    socket.on('neueNachricht', (data)=> {
        messages.append(data.username + ': ' + data.message + '\n');
    });
});
