const campo = document.getElementById("campo-tweet");
const contador = document.getElementById("contador-tweet");
const botao = document.getElementById("botao-enviar-tweet");

campo.addEventListener("input", () => {
  const tamanho = campo.value.length;
  const restante = 140 - tamanho;

  if (tamanho === 0) {
    contador.innerHTML = "140";
    botao.disabled = true;
  } else {
    contador.style.display = "inline";
    contador.textContent = restante;

    if (restante < 0) {
      contador.style.color = "rgb(255, 0, 0)";
      botao.disabled = true;
    } else if (restante < 40) {
      contador.style.color = "rgb(255, 200, 0)";
      botao.disabled = false;
    } else {
      contador.style.color = "black";
      botao.disabled = false;
    }
  }
});