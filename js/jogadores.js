var jogadoresSelecionados = [];

function montaJogadores() {
    ativaItemMenu('jogadores');
    $('#titulo').text('Jogadores');
    $('#marcador').hide();
    $('#pagamento').hide();
    $('#jogadores').show();
}

function adicionaRemoveJogador(checkbox) {
    if ($(checkbox).is(":checked")) {
        jogadoresSelecionados.push(checkbox.id);
    } else {
        jogadoresSelecionados.remove(checkbox.id);
    }
}

$(".jogadores").click(function() {
    ativaItemMenu('jogadores');
    montaJogadores();
});

$('#confirma').click(function() {
    $('.marcador').removeClass('disabled');
    $('.pagamento').removeClass('disabled');
    montaTabelaMarcacao(jogadoresSelecionados);
    montaTabelaPagamento(jogadoresSelecionados);
    $('.jogadores').addClass('disabled');
    ativaItemMenu('marcador');
    montaMarcador();
});

$('#adicionaNovoJogador').click(function() {

    var valor = $('#nomeJogador').val();
    var nome = valor.replace(/\s/g, '');
    $('#nomeJogador').val('');

    $('#todosJogadores').append($('<div>', {
        class: 'col s6 m4 l4 checkbox',
        id: nome + '-novo',
        html: '<label><input id="' + nome + '" type="checkbox" onChange="adicionaRemoveJogador(' + nome + ')"/><span>' + valor + '</span></label>'
    }));
})