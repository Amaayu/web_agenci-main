// JavaScript to toggle mobile menu

// Toggle mobile menu visibility when the navbar is clicked
const navbar = document.getElementById("navbar");
if (navbar) {
  navbar.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });
}

// Hide mobile menu when the close button is clicked
const closeMenu = document.getElementById("close-menu");
if (closeMenu) {
  closeMenu.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
}

// Handle form submission for user signup
const formE1 = document.getElementById("aashu");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
if (formE1 && username && email && password) {
  formE1.addEventListener("submit", function (e) {
    e.preventDefault();

    // Convert form data to JSON
    const data = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    // Send form data to the server
    fetch("http://localhost:8080/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response;
      })
      .then(function (data) {
        if (data.status === 200) {
          alert("User created successfully");
          window.location.href = "/index.html";
        } else {
          alert("User creation failed");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}
