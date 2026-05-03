document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var num = document.getElementById("num").value.trim();
    var text = document.getElementById("text").value.trim();

    var oldErrors = document.querySelectorAll(".error-msg");
    oldErrors.forEach(function (el) {
        el.remove();
    });

    var isValid = true;
    var fields = [
        { id: "fname", value: fname },
        { id: "lname", value: lname },
        { id: "email", value: email },
        { id: "num", value: num },
        { id: "text", value: text }
    ];

    fields.forEach(function (field) {
        if (field.value === "") {
            isValid = false;
            var input = document.getElementById(field.id);
            var errorSpan = document.createElement("span");
            errorSpan.className = "error-msg";
            errorSpan.style.display = "block";
            errorSpan.textContent = "Field Value need to be filled up";
            input.parentNode.appendChild(errorSpan);
        }
    });

    if (isValid) {
        console.log("First Name: " + fname);
        console.log("Last Name: " + lname);
        console.log("Email: " + email);
        console.log("Number: " + num);
        console.log("Opinion: " + text);
        alert("Form submitted! Check console (F12) for values.");
    }
});