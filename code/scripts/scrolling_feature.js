const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});


const hiddenElements = document.querySelectorAll("div[class='sectiondiv hidden']");
hiddenElements.forEach((el) => observer.observe(el));
