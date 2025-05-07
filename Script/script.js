    document.getElementById('helpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ne küldje el az űrlapot automatikusan

    let messages = [];

    // Mezők lekérése és trim-elése
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const problem = document.getElementById('problem').value.trim();

    // Név ellenőrzés
    if (name === "") {
        messages.push("A név megadása kötelező.");
    } else {
        if (name.length < 10) {
            messages.push("A névnek legalább 10 karakter hosszúnak kell lennie.");
        }
        if (/\d/.test(name)) {
            messages.push("A név nem tartalmazhat számokat.");
        }
    }

    // Email ellenőrzés
    if (email === "") {
        messages.push("Az email cím megadása kötelező.");
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            messages.push("Kérjük, érvényes email címet adjon meg.");
        }
    }

    // Telefonszám ellenőrzés
    if (phone === "") {
        messages.push("A telefonszám megadása kötelező.");
    } else if (phone.length < 7) {
        messages.push("A telefonszám túl rövid.");
    }

    // Tartózkodási hely ellenőrzés
    if (location === "") {
        messages.push("A tartózkodási hely megadása kötelező.");
    } else if (location.length < 10) {
        messages.push("A tartózkodási helynek legalább 10 karakter hosszúnak kell lennie.");
    }

    // Probléma ellenőrzés
    if (problem === "") {
        messages.push("A probléma leírása kötelező.");
    } else if (problem.length < 10) {
        messages.push("A probléma leírásának legalább 10 karakter hosszúnak kell lennie.");
    }

    // Összes hiba kiírása egy alert ablakban
    if (messages.length > 0) {
        alert(messages.join("\n"));
    } else {
        alert("Az űrlap sikeresen elküldve!");
        this.submit(); // Ha minden rendben van, az űrlap elküldése
    }
});

    // Vélemény hozzáadása a listához
    document.getElementById("review-form").addEventListener("submit", function (event) {
        event.preventDefault();  // Megakadályozza az alapértelmezett űrlap elküldést

        // Form adatok lekérése
        const name = document.getElementById("name").value;
        const reviewText = document.getElementById("review-text").value;
        const rating = document.getElementById("rating").value;

        // Új vélemény elem létrehozása
        const newReview = document.createElement("div");
        newReview.classList.add("review");

        newReview.innerHTML = `
            <img src="images/default-avatar.jpg" alt="New Customer" class="review-img">
            <p class="review-text">"${reviewText}"</p>
            <p class="review-author">${name}</p>
            <div class="stars">${"⭐".repeat(rating)}</div>
        `;

        // Vélemények hozzáadása
        document.querySelector(".reviews").appendChild(newReview);

        // Űrlap mezők törlése
        document.getElementById("review-form").reset();
    });

