const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const view1 = document.querySelector(".view1");
const view2 = document.querySelector(".view2");

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
    }

    if (hasUppercase) {
        uppercase.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            uppercase.childNodes[1].innerHTML &&
                uppercaseClass.childNodes[0].remove();
        }
    }

    if (hasLowercase) {
        lowercase.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            lowercase.childNodes[1].innerHTML &&
                lowercaseClass.childNodes[0].remove();
        }
    }

    if (hasInteger) {
        number.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            number.childNodes[1].innerHTML &&
                numberClass.childNodes[0].remove();
        }
    }

    if (text.length >= 8) {
        textLength.childNodes[1].innerHTML = `<img src="../python project images/check-mark.png" alt="check-mark" height="17"/>`;
    } else {
        {
            textLength.childNodes[1].innerHTML &&
                textLengthClass.childNodes[0].remove();
        }
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
        if (confirmPasswordValue.length > 0) {
            if (passwordValue === confirmPasswordValue) {
                confirmError.style.display = "block";
                confirmError.innerHTML = "password matches";
                confirmError.style.color = "green";
            } else {
                confirmError.style.display = "block";
                confirmError.innerHTML = "password doesn't match";
                confirmError.style.color = "red";
            }
        } else {
            confirmError.style.display = "none";
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
        text: "Your account has been created....",
        duration: 2500,
        close: false,
        gravity: "top",
        position: "right",
        style: {
            background: "#4CAF50",
            textAlign: "center",
            padding: "10px",
            fontSize: "16px",
            color: "#fff",
        },
    }).showToast();
    setTimeout(() => {
        window.location.href = "../login/index.html";
    }, 2000);
}

// Function to check if the form is completely filled
function isFormComplete(form) {
    // Get all elements in the form with the 'required' attribute
    const requiredElements = form.querySelectorAll("[required]");

    for (const element of requiredElements) {
        // For text-based inputs, check if they are empty
        if (element.type === "text" || element.type === "email") {
            if (element.value.trim() === "") {
                return false; // If any required text input is empty, return false
            }
        }

        // For radio buttons, check if at least one is selected
        if (element.type === "radio") {
            const groupName = element.name;
            const isChecked = form.querySelector(
                `input[name="${groupName}"]:checked`
            );
            if (!isChecked) {
                return false; // If no radio button in the group is checked, return false
            }
        }

        // For checkboxes, check if they are checked
        if (element.type === "checkbox") {
            if (!element.checked) {
                return false; // If a required checkbox is not checked, return false
            }
        }
    }

    return true; // If all required fields are filled, return true
}

function handleSubmit() {
    // Get the form element
    const form = document.getElementById("myForm");

    // Check if the form is completely filled
    if (isFormComplete(form)) {
        showToast();
    } else {
        alert("Please fill in all required fields.");
    }
}
