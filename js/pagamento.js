function montaPagamento() {
    $('#titulo').text('Pagamento');
    $('#marcador').hide();
    $('#pagamento').show();
    $('#jogadores').hide();
}

$(".pagamento").click(function () {
    ativaItemMenu('pagamento');
    montaPagamento();
});

function montaTabelaPagamento(jogadoresSelecionados) {
    $.each(jogadoresSelecionados.sort(), function(index, value) {
        $('#pagamento-jogadores').append($('<tr>', {
            id: 'linha-pagamento-' + index
        }));
    
        $('#linha-pagamento-'+index).append($('<td>',{
            html: '<strong>'+value+'</strong>'
        }));

        $('#linha-pagamento-'+index).append($('<td>',{
            html: '<label><input type="checkbox"/><span></span></label>'
        }));
    });
}