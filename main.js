/* =========================
   HEADER LOAD
========================== */
fetch("/header.html")
  .then(response => response.text())
  .then(data => {

    const header = document.getElementById("header");

    if (header) {
      header.innerHTML = data;
    }

    // Mobile Menu
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
      });

    }

  });



/* =========================
   SIDEBAR LOAD
========================== */
fetch("/sidebar.html")
  .then(response => response.text())
  .then(data => {

    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
      sidebar.innerHTML = data;
    }

    // Newsletter Form
    const form = document.getElementById("subscribeForm");
    const input = document.getElementById("emailInput");
    const msg = document.getElementById("sub-msg");

    if (form && input && msg) {

      form.addEventListener("submit", () => {

        msg.classList.remove("hidden");

        setTimeout(() => {
          input.value = "";
        }, 200);

        setTimeout(() => {
          msg.classList.add("hidden");
        }, 4000);

      });

    }

  });



/* =========================
   FOOTER LOAD
========================== */
fetch("/footer.html")
  .then(response => response.text())
  .then(data => {

    const footer = document.getElementById("footer");

    if (footer) {
      footer.innerHTML = data;
    }

  });



/* =========================
   BREAKING NEWS
========================== */
fetch("/breaking-news.html")
  .then(response => response.text())
  .then(data => {

    const breaking = document.getElementById("breaking-news");

    if (breaking) {
      breaking.innerHTML = data;
    }

  });



/* =========================
   SOCIAL STRIP
========================== */
fetch("/social.html")
  .then(response => response.text())
  .then(data => {

    const social = document.getElementById("social-strip");

    if (social) {
      social.innerHTML = data;
    }

  });
