function showAbout() {
  document.getElementById("infoAbout").style.display = "block";
  document.getElementById("infoHobbies").style.display = "none";
  document.getElementById("profileImage").src = "./photo/benim1.png";

  const btnAbout = document.getElementById("btnAbout");
  const btnHobbies = document.getElementById("btnHobbies");

  btnAbout.classList.add("btn-primary");
  btnAbout.classList.remove("btn-outline-primary");

  btnHobbies.classList.remove("btn-primary");
  btnHobbies.classList.remove("btn-outline-secondary");
  btnHobbies.classList.add("btn-outline-secondary");
}

function showHobbies() {
  document.getElementById("infoAbout").style.display = "none";
  document.getElementById("infoHobbies").style.display = "block";
  document.getElementById("profileImage").src = "./photo/hobi.png";

  const btnAbout = document.getElementById("btnAbout");
  const btnHobbies = document.getElementById("btnHobbies");

  btnHobbies.classList.add("btn-primary");
  btnHobbies.classList.remove("btn-outline-secondary");

  btnAbout.classList.remove("btn-primary");
  btnAbout.classList.add("btn-outline-primary");
}

// ✅ Bu sayfa yüklendiğinde otomatik olarak çalışır
document.addEventListener("DOMContentLoaded", function () {
  showAbout();
});



// ----- Smooth Scroll for Anchor Links -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ----- Fade-in Sections on Scroll -----
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".fade-section").forEach(section => {
  observer.observe(section);
});
