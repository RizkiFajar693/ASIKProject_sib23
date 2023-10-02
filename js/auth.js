const correctEmail = "qiqi";
const correctPassword = "1234";

const target = document.getElementById("message-con");
const progress = document.getElementById("progress");

function cekLogin() {
  var userEmail = document.getElementById("fusername").value;
  var userPassword = document.getElementById("fpassword").value;

  target.classList.remove("hidden");

  if (userEmail !== correctEmail || userPassword !== correctPassword) {
    target.innerHTML = "<p> Email atau Password salah </p>";
    target.classList.add("bg-red-500");
    target.classList.remove("bg-green-500");
  } else {
    target.innerHTML = "<p>Anda Berhasil Login</p>";
    target.classList.remove("hidden");
    target.classList.add("bg-green-500");
    target.classList.remove("bg-red-500");

    setTimeout(function () {
      window.location.href = "index.html";
    }, 0);
  }
}

function signup() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("ConfirmPassword").value;

  target.classList.remove("hidden");

  if (password !== confirmPassword) {
    target.innerHTML =
      "<p>Kata sandi dan konfirmasi kata sandi tidak cocok. </p>";
    target.classList.add("bg-red-500");
    target.classList.remove("bg-green-500");
  } else {
    target.innerHTML = "<p>Anda Berhasil Registrasi</p>";
    target.classList.remove("hidden");
    target.classList.add("bg-green-500");
    target.classList.remove("bg-red-500");

    setTimeout(function () {
      window.location.href = "login.html";
    }, 0);
  }

  // Add your login logic here
  console.log("Username: " + username);
  console.log("Password: " + password);
}

function Forgot() {
  document
    .getElementById("forgotPasswordButton")
    .addEventListener("click", function () {
      window.location.href = "signup.html";
    });
}
