var jogadores = ["Farrael","Marlon","Junim","Fillip","Vitor Leles","Carol","Vitor F","Filipe","Caio","Gabriel H","Teste Nome Grande"];

$.each(jogadores.sort(), function(index, value) {
    var nome = value.replace( /\s/g, '' );
    $('#todosJogadores').append($('<div>', {
        class: 'col s6 m4 l4 checkbox',
        id: index,
        html: '<label><input id="' + nome + '" type="checkbox" onChange="adicionaRemoveJogador('+nome+')"/><span>' + value + '</span></label>'
    }));
});
  