$(document).ready(function(){
  $('.sidenav').sidenav();
});

function ativaItemMenu(elemento) {
  $('#titulo').html('');
  $('.ativo').removeClass('ativo');
  $("."+elemento+"").addClass('ativo');
}

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};






