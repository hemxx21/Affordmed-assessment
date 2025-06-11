document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();

  if (!name || !email || !phone || !address || !city || !state) {
    alert("Please fill out all fields.");
    return;
  }

  const confirmation = document.getElementById("confirmation");
  confirmation.classList.remove("hidden");
  confirmation.textContent = `Thank you, ${name}! Your registration is complete.`;

  e.target.reset();
});
