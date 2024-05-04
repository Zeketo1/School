const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const view1 = document.querySelector(".view1");
const view2 = document.querySelector(".view2");

// password.addEventListener("keyup", (e) => {
//     if (e.target.value.includes(confirmPasswordValue)) {
//         console.log("me");
//     }
// });

const passwordView = (password) => {
    password.type = "text";
};

const passwordHide = (password) => {
    password.type = "password";
};

view1.addEventListener("click", () => {
    password.type == "password"
        ? passwordView(password)
        : passwordHide(password);
});

view2.addEventListener("click", () => {
    confirmPassword.type == "password"
        ? passwordView(confirmPassword)
        : passwordHide(confirmPassword);
});

const uppercase = document.querySelector("#uppercase");
const uppercaseClass = document.querySelector(".uppercase");
const textLength = document.querySelector("#text-length");
const textLengthClass = document.querySelector(".text-length");
const number = document.querySelector("#number");
const numberClass = document.querySelector(".number");
const lowercase = document.querySelector("#lowercase");
const lowercaseClass = document.querySelector(".lowercase");
const special = document.querySelector("#special");
const specialClass = document.querySelector(".special");

function containsUppercaseWord(text) {
    return text.split("");
}

function containsLowercaseWord(text) {
    return text.split("");
}

function containsInteger(text) {
    return text.split("");
}

function containsSpecialCharacters(word) {
    const specialCharRegex = /[^a-zA-Z0-9]/; // Regex for non-alphanumeric characters
    return specialCharRegex.test(word); // Test for special characters
}

function handleInputChange(event) {
    const text = event.target.value;
    const hasUppercase = containsUppercaseWord(text).some(
        (word) => word === word.toUpperCase() && word !== ""
    );

    const hasLowercase = containsLowercaseWord(text).some(
        (word) => word === word.toLowerCase() && word !== ""
    );

    const hasInteger = containsInteger(text).some((element) =>
        Number.isInteger(parseFloat(element))
    );

    console.log(containsInteger(text));

    containsSpecialCharacters(text);

    if (containsSpecialCharacters(text)) {
        special.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            special.childNodes[1].innerHTML &&
                specialClass.childNodes[0].remove();
        }
        // special.childNodes[1].style.backgroundColor = "#d1c9c9";
    }

    if (hasUppercase) {
        uppercase.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            uppercase.childNodes[1].innerHTML &&
                uppercaseClass.childNodes[0].remove();
        }
        // uppercase.firstElementChild.style.backgroundColor = "#d1c9c9";
    }

    if (hasLowercase) {
        lowercase.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            lowercase.childNodes[1].innerHTML &&
                lowercaseClass.childNodes[0].remove();
        }
        // lowercase.firstElementChild.style.backgroundColor = "#d1c9c9";
    }

    if (hasInteger) {
        number.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            number.childNodes[1].innerHTML &&
                numberClass.childNodes[0].remove();
        }
        // number.firstElementChild.style.backgroundColor = "#d1c9c9";
    }

    if (text.length >= 8) {
        textLength.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            textLength.childNodes[1].innerHTML &&
                textLengthClass.childNodes[0].remove();
        }
        // textLength.firstElementChild.style.backgroundColor = "#d1c9c9";
    }
}

if (password) {
    password.addEventListener("input", handleInputChange);
} else {
    console.error("Element with ID 'password' not found");
}

const confirmError = document.querySelector(".check-password-error-massage");

if (confirmPassword) {
    confirmPassword.addEventListener("input", () => {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;
        if (passwordValue === confirmPasswordValue) {
            confirmError.innerHTML = "password matches";
            confirmError.style.color = "green";
        } else {
            confirmError.innerHTML = "password doesn't match";
            confirmError.style.color = "red";
        }
    });
} else {
    console.error("Element with ID 'confirm-password' not found");
}

function handleFormSubmit(event) {
    event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", handleFormSubmit);
});

function showToast() {
    Toastify({
        text: "This is a toast message",
        duration: 3000, 
        close: false,
        gravity: "top",
        position: "right",
        backgroundColor: "#4CAF50", 
        style: {
            textAlign: "center",
            padding: "10px", 
            fontSize: "16px", 
            color: "#fff",
        },
    }).showToast();
}
