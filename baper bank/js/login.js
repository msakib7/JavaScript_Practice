document
        .getElementById("btn-submit")
        .addEventListener("click", function () {
          console.log("clicked");
          const emailField = document.getElementById("user-email");
          const passwordField = document.getElementById("user-password");
          const email = emailField.value;
          const password = passwordField.value;
          if (email === "msakib@gmail.com" && password === "msakib") {
            window.location.href = 'bank.html';
          } else {
            alert("You have to give right information to log-in");
          }

          passwordField.value = '';
        });