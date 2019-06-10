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