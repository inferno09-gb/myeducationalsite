alert("Saytga xush kelibsiz!");
function tekshir() {
    const javob = document.getElementById("javob").value.toLowerCase();
    const natija = document.getElementById("natija");

    if (javob === "international english language testing system") {
        natija.textContent = "✅ To‘g‘ri!";
        natija.style.color = "green";
    } else {
        natija.textContent = "❌ Noto‘g‘ri. Qayta urinib ko‘ring.";
        natija.style.color = "red";
    }
}