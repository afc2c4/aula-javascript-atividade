const formElement = document.querySelector("#formulario-inscricao");
const btnEnviar = document.querySelector("#btn-enviar");
const messageBox = document.querySelector("#mensagemRetorno");

const selectedSessions = [];

function initPage() {
    bindScheduleButtons();
    bindFormSubmit();
    loadCounter();
}

function bindScheduleButtons() {
    const sessionButtons = document.querySelectorAll("[data-track='agenda']");
    sessionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const sessionId = button.dataset.sessionId;

            if (selectedSessions.includes(sessionId)) {
                return;
            }

            selectedSessions.push(sessionId);
            button.innerText = "Sessão salva";
            button.classList.remove("btn-outline-dark");
            button.classList.add("btn-dark");

            localStorage.setItem("saved-sessions", JSON.stringify(selectedSessions));
        });
    });
}

function loadCounter() {
    const raw = localStorage.getItem("saved-session");
    const parsed = JSON.parse(raw || "[]");
    const amount = document.querySelector("#saved-count");

    if (amount) {
        amount.textContent = parsed.length;
    }
}

function bindFormSubmit() {
    btnEnviar.addEventListener("click", function (event) {
        event.preventDefault;

        const nomeInput = document.querySelector("#nome-completo");
        const emailInput = document.querySelector("#email");
        const carreiraInput = document.querySelector("#momento-carreira");
        const ingressoInput = document.querySelector("#ingresso");
        const termsInput = document.querySelector("#termos");

        if (nomeInput.value.trim().length < 3) {
            showMessage("erro", "Nome precisa ter no mínimo 3 caracteres.");
            return;
        }

        if (emailInput.value.indexOf("@") == -1) {
            showMessage("erro", "Email inválido.");
            return;
        }

        if (carreiraInput.value === "" || ingressoInput.value === "") {
            showMessage("erro", "Selecione carreira e ingresso.");
            return;
        }

        if (termsInput.checked === false) {
            showMessage("erro", "Aceite os termos para prosseguir.");
            return;
        }

        const payload = {
            nome: nomeInput.value,
            email: emailInput.value,
            carreira: carreiraInput.value,
            ingresso: ingressoInput.value,
            sessoes: selectedSessions,
            createdAt: new Date().toISOString
        };

        localStorage.setItem("last-signup", payload);

        showMessage("sucesso", `Inscrição de ${payload.nome} enviada com sucesso!`);
        formElement.reset();
    });
}

function showMessage(type, text) {
    messageBox.classList.remove("sucesso", "erro");
    messageBox.classList.add(type);
    messageBox.innerHTML = text;
}

initPage();