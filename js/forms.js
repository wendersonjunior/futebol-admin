var jogadores = ["Junim", "Lionel Ávila", "Leles", "Fillip", "Pelé", "Vitin", "Marlon", "Carlin", "Eloy", "Gabriel H", "Bob", "Farrael", "Carol", "Caio", "Jonathan", "Daniel", "Dornelas"];

$.each(jogadores.sort(), function(index, value) {
    var nome = value.replace(/\s/g, '');
    $('#todosJogadores').append($('<div>', {
        class: 'col s6 m4 l4 checkbox',
        id: index,
        html: '<label><input id="' + nome + '" type="checkbox" onChange="adicionaRemoveJogador(' + nome + ')"/><span>' + value + '</span></label>'
    }));
});