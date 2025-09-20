const chatId = "-1002680869760";
const telegramBotId = "8002307521:AAHXMKHG-FuyoUJtksnXxgFhRiQ6xcbrPRY";
const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

// So'rov yuborish
const sendRequest = (e) => {
    e.preventDefault();

    const firstName = document.querySelector(".first-name").value.trim();
    const phone = document.querySelector(".phone").value.trim();

    const message = `👤 Ism: ${firstName}\n📞 Telefon: ${phone}`;

    const formData = {
        chat_id: chatId,
        text: message,
    };

    axios
        .post(url, formData)
        .then(() => {
            alert("So'rov muvaffaqiyatli yuborildi!");
        })
        .catch(() => {
            alert("Nimadir xato ketdi!");
        });

    // Formani tozalash
    document.querySelector(".first-name").value = "";
    document.querySelector(".phone").value = "";
};

document.querySelector("form").addEventListener("submit", sendRequest);


function showForm() {
    document.getElementById("overlay").style.display = "flex";
    document.body.style.overflow = "hidden"; // Scrollni to'xtatish
}

function closeForm(event) {
    // Agar event target overlay bo'lsa (forma emas) yoki yopish tugmasi bosilgan bo'lsa
    if (!event || event.target.id === "overlay" || event.target.classList.contains("closeBtn")) {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = "auto"; // Scrollni qayta yoqish
    }
}

// Formani yuborish
document.querySelector('#contactForm form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;

    alert('Rahmat, ' + name + '! Tez orada siz bilan bog‘lanamiz.');
    this.reset();
    closeForm();
});

// ESC tugmasi bilan yopish imkoniyati
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = "auto";
    }
});