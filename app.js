const pw = document.querySelector("#password");
const pwC = document.querySelector("#passwordC");
const pwError = document.querySelector("#passwordC-error");

pwC.addEventListener("input", function (event) {
  if (pwC.value !== pw.value) {
    pwError.textContent = "Passwords do not match";
  } else {
    pwError.textContent = "";
  }
});

pw.addEventListener("input", function (event) {
  if (pwC.value !== pw.value) {
    pwError.textContent = "Passwords do not match";
  } else {
    pwError.textContent = "";
  }
});
