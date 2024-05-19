
//Kod za modal u galeriji
var modals = document.getElementsByClassName("modal");
var spans = document.getElementsByClassName("close");

var modalTriggers = document.getElementsByClassName("modal-trigger");
for (var i = 0; i < modalTriggers.length; i++) {
  modalTriggers[i].onclick = function() {
    var modalId = this.getAttribute('href').replace('#', '');
    document.getElementById(modalId).style.display = "block";
  }
}

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = "none";
  }
}