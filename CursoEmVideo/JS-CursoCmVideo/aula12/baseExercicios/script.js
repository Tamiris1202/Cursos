function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var bd = document.getElementById("bd");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora sao ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    bd.innerHTML = `Bom dia!`;
    document.body.style.background = "#b0d6ff";
    img.src = "img/manha.jpg";
  } else if (hora >= 12 && hora <= 18) {
    bd.innerHTML = `Bom tarde!`;
    document.body.style.background = "#c55717";
    img.src = "img/tarde.jpg";
  } else {
    bd.innerHTML = `Boa noite!`;
    document.body.style.background = "#123143";
    img.src = "img/noite.jpg";
  }
}
