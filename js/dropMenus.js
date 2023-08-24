/* Funções que ativa o menu */
function Menu() {
    document.getElementById("world-dropdown").classList.toggle("show");
    document.getElementById("dropbtn").classList.toggle("active");
  }

  // Fecha DropUp se clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
      var dropdowns = document.getElementsByClassName("dd-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
           //if(!event.target.matches('#notClickable')) 
           openDropdown.classList.remove('show');
           document.getElementById("dropbtn").classList.remove("active");
        }
      }
    }
  }