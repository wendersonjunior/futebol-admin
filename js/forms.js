var jogadores = ["Jogador1","Jogador2","Jogador3","Jogador4","Jogador5","Jogador6","Jogador7","Jogador8","Jogador9","Jogador10","Jogador11","Jogador12","Jogador13","Jogador14","Jogador15"];

$.each(jogadores.sort(), function(index, value) {
    $('#todosJogadores').append($('<div>', {
        class: 'col s6 m4 l4 checkbox',
        id: index,
        html: '<label><input id="' + value + '" type="checkbox" onChange="adicionaRemoveJogador('+value+')"/><span>' + value + '</span></label>'
    }));
});
  