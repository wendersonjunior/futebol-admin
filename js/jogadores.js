var jogadoresSelecionados = [];

function montaJogadores() {
    $('#titulo').text('Jogadores');
    $('#marcador').hide();
    $('#pagamento').hide();
    $('#jogadores').show();
}

function adicionaRemoveJogador(checkbox){
    if ($(checkbox).is(":checked")){
        jogadoresSelecionados.push(checkbox.id);
    } else {
        jogadoresSelecionados.remove(checkbox.id);
    }
}

$(".jogadores").click(function () {
    ativaItemMenu('jogadores');
    montaJogadores();
});

$('#confirma').click(function () {
    $('.marcador').removeClass('disabled');
    $('.pagamento').removeClass('disabled');
    montaTabelaMarcacao(jogadoresSelecionados);
    $('#confirma').attr('disabled');
});

