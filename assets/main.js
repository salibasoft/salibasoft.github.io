(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const nav = document.querySelector(".topbar nav");
  const menu = document.querySelector(".menu-btn");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      }),
    );
  }

  const address = atob("amloYWRzYWxpYmEzOUBnbWFpbC5jb20=");
  document.querySelectorAll("[data-email]").forEach((link) => {
    const subject =
      link.getAttribute("data-subject") || "Project inquiry from USSOFTWARE";
    link.href = `mailto:${address}?subject=${encodeURIComponent(subject)}`;
  });

  document.querySelectorAll("[data-assessment-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const service = String(data.get("service") || "").trim();
      const details = String(data.get("details") || "").trim();
      const subject = `Free project assessment request — ${service}`;
      const body = [
        "Hello,",
        "",
        "I would like a free project assessment.",
        "",
        `Name: ${name}`,
        `Reply email: ${email}`,
        `Service: ${service}`,
        `Page: ${window.location.href}`,
        "",
        "Project description:",
        details,
      ].join("\n");

      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent =
          "Your email application is opening with the request ready to send.";
      }
      window.location.href = `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.06 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((element) => element.classList.add("visible"));
  }
})();
