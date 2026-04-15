const form = document.querySelector("#formulario-inscricao");
const message = document.querySelector("#mensagem");

form.addEventListener("submit", function (event) {
    event.preventdefault();

    const nameInput = document.querySelector("#nome");
    const emailInput = document.querySelector("#email");
    const levelInput = document.querySelector("#nivel");

    if (nameInput.value === "" || email.value === "") {
        message.innerHtml = "Preencha os campos obrigatórios.";
        message.style.color = "#b42318";
        return;
    }

    message.innerHTML = `${nameInput.value}, sua inscrição para o nível ${levelInput.value} foi recebida.`;
    form.reset();
});