function montaMarcador() {
    $('#titulo').text('Marcador');
    $('#marcador').show();
    $('#pagamento').hide();
    $('#jogadores').hide();
}

$(".marcador").click(function () {
    ativaItemMenu('marcador');
    montaMarcador();
});

function montaTabelaMarcacao(jogadoresSelecionados) {
    $.each(jogadoresSelecionados.sort(), function(index, value) {
        $('#marcador-jogadores').append($('<tr>', {
            id: 'linha-' + index
        }));
    
        $('#linha-'+index).append($('<td>',{
            id: 'jogador-' + value,
            html: '<strong>'+value+'</strong>'
        }));
    
        $('#linha-'+index).append($('<td>',{
            id: 'gols-' + value,
            html: '<span>0 <i class="tiny material-icons" style="color: rgb(91, 161, 59)" id="adiciona-gol-'+value+'">add_circle</i> <i class="tiny material-icons" style="color: rgb(199, 34, 34)" id="remove-gol-'+value+'"">remove_circle</i></span>'
        }));
    
        $('#linha-'+index).append($('<td>',{
            id: 'assistencia-' + value,
            html: '<span>0 <i class="tiny material-icons" style="color: rgb(91, 161, 59)" id="adiciona-assistencia-'+value+'">add_circle</i> <i class="tiny material-icons" style="color: rgb(199, 34, 34)" id="remove-assistencia-'+value+'"">remove_circle</i></span>'
        }));
    
        $('#linha-'+index).append($('<td>',{
            id: 'defesa-' + value,
            html: '<span>0 <i class="tiny material-icons" style="color: rgb(91, 161, 59)" id="adiciona-defesa-'+value+'">add_circle</i> <i class="tiny material-icons" style="color: rgb(199, 34, 34)" id="remove-defesa-'+value+'"">remove_circle</i></span>'
        }));
    });
}
