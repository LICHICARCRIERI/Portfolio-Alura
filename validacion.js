//Haz tú validación en javascript acá

const $form = document.querySelector(".formcontato__form")
const $mailTo = document.querySelector(".invi")

$form.addEventListener("submit", handleSubmit)


function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $mailTo.setAttribute("href", `mailto:lisandrocarrieri@gmail.com?subject=${form.get("asunto")}&body=${form.get("mensaje")}`);
    $mailTo.click();
}