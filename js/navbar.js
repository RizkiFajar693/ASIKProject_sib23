var isLoggedIn = true;
var avatarUrl = "images/doctor1.jpg";

var signupLink = document.getElementById("signup-link");
var loginLink = document.getElementById("login-link");

if (isLoggedIn) {
  signupLink.style.display = "none";
  loginLink.style.display = "none";

  var avatarLink = document.querySelector(".avatar-link");
  var avatarImage = document.querySelector(".avatar-image");
  avatarLink.href = "profile.html";
  avatarImage.src = avatarUrl;
  avatarImage.alt = "Avatar";
}
