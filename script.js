const email = document.getElementById("email");
const error = document.getElementById("error");
const form = document.getElementById("form");

const validate = () => {
  form.addEventListener("submit", (e) => {
    let messages = [];
    if (email.value == "" || email.value == null) {
      messages.push("Oops! That doesn't look like an email address");
    }

    if (messages.length > 0) {
      e.preventDefault();
      error.innerText = messages.join(", ");
    }
  });
};

validate();
