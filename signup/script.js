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

// password.addEventListener("input", () => {
//     console.log("Sup");
// });

const uppercase = document.querySelector("#uppercase");

function containsUppercaseWord(text) {
    const words = text.split(/\s+/);
    return words.some((word) => word === word.toUpperCase() && word !== "");
}

function handleInputChange(event) {
    const text = event.target.value;
    const hasUppercase = containsUppercaseWord(text);

    if (hasUppercase) {
        uppercase.style.backgroundColor = "black";
    } else {
        uppercase.style.backgroundColor = "blue";
    }
}

password.addEventListener("input", handleInputChange);
