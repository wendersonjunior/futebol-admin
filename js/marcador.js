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
            html: '<div class="row centraliza" style="margin-bottom: 0px"><div class="col s6"><span id="saldo-gols-'+value+'">0</span></div><div class="col s6"><p><i class="small material-icons botao" style="color: rgb(91, 161, 59)" id="adiciona-gol-'+value+'" onclick="adicionaRemoveGol(this.id, 1);">add_circle</i></p> <p><i class="small material-icons botao" style="color: rgb(199, 34, 34)" id="remove-gol-'+value+'" onclick="adicionaRemoveGol(this.id, 2)">remove_circle</i></span></p></div></div>'
        }));
        
        $('#linha-'+index).append($('<td>',{
            id: 'assistencia-' + value,
            html: '<div class="row centraliza" style="margin-bottom: 0px"><div class="col s6"><span id="saldo-assistencia-'+value+'">0</span></div><div class="col s6"><p><i class="small material-icons botao" style="color: rgb(91, 161, 59)" id="adiciona-assistencia-'+value+'" onclick="adicionaRemoveAssistencia(this.id, 1);">add_circle</i></p> <p><i class="small material-icons botao" style="color: rgb(199, 34, 34)" id="remove-assistencia-'+value+'" onclick="adicionaRemoveAssistencia(this.id, 2);">remove_circle</i></span></p></div></div>'
        }));
    
        $('#linha-'+index).append($('<td>',{
            id: 'defesa-' + value,
            html: '<div class="row centraliza" style="margin-bottom: 0px"><div class="col s6"><span id="saldo-defesa-'+value+'">0</span></div><div class="col s6"><p><i class="small material-icons botao" style="color: rgb(91, 161, 59)" id="adiciona-defesa-'+value+'" onclick="adicionaRemoveDefesa(this.id, 1);">add_circle</i></p> <p><i class="small material-icons botao" style="color: rgb(199, 34, 34)" id="remove-defesa-'+value+'" onclick="adicionaRemoveDefesa(this.id, 2);">remove_circle</i></span></p></div></div>'
        }));
    });
}

function adicionaRemoveGol(element, acao) {

    if (acao == 1){
        var id = element.replace('adiciona-gol-', 'saldo-gols-');
        saldoAtual = $('#'+id).text();
        novoSaldo = parseInt(saldoAtual) + 1;
    } else {
        var id = element.replace('remove-gol-', 'saldo-gols-');
        saldoAtual = $('#'+id).text();
        novoSaldo = parseInt(saldoAtual) - 1;
    }
    saldoAtual = $('#'+id).text(novoSaldo);
}

function adicionaRemoveAssistencia(element, acao) {

    if (acao == 1){
        var id = element.replace('adiciona-assistencia-', 'saldo-assistencia-');
        saldoAtual = $('#'+id).text();
        novoSaldo = parseInt(saldoAtual) + 1;
    } else {
        var id = element.replace('remove-assistencia-', 'saldo-assistencia-');
        saldoAtual = $('#'+id).text();
        novoSaldo = parseInt(saldoAtual) - 1;
    }
    saldoAtual = $('#'+id).text(novoSaldo);
}

function adicionaRemoveDefesa(element, acao) {

    if (acao == 1){
        var id = element.replace('adiciona-defesa-', 'saldo-defesa-');
        saldoAtual = $('#'+id).text();
        novoSaldo = parseInt(saldoAtual) + 1;
    } else {
        var id = element.replace('remove-defesa-', 'saldo-defesa-');
        saldoAtual = $('#'+id).text();
        novoSaldo = parseInt(saldoAtual) - 1;
    }
    saldoAtual = $('#'+id).text(novoSaldo);
}


window.onload = function() {
    pantalla = document.getElementById("screen");
 }
 var isMarch = false; 
 var acumularTime = 0; 
 function start () {
          if (isMarch == false) { 
             timeInicial = new Date();
             control = setInterval(cronometro,10);
             isMarch = true;
             }
          }
 function cronometro () { 
          timeActual = new Date();
          acumularTime = timeActual - timeInicial;
          acumularTime2 = new Date();
          acumularTime2.setTime(acumularTime); 
          cc = Math.round(acumularTime2.getMilliseconds()/10);
          ss = acumularTime2.getSeconds();
          mm = acumularTime2.getMinutes();
          hh = 0;
          if (cc < 10) {cc = "0"+cc;}
          if (ss < 10) {ss = "0"+ss;} 
          if (mm < 10) {mm = "0"+mm;}
          if (hh < 10) {hh = "0"+hh;}
          pantalla.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
          }
 
 function stop () { 
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             }     
          }      
 
 function resume () {
          if (isMarch == false) {
             timeActu2 = new Date();
             timeActu2 = timeActu2.getTime();
             acumularResume = timeActu2-acumularTime;
             
             timeInicial.setTime(acumularResume);
             control = setInterval(cronometro,10);
             isMarch = true;
             }     
          }
 
 function reset () {
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             }
          acumularTime = 0;
          pantalla.innerHTML = "00 : 00 : 00 : 00";
          }