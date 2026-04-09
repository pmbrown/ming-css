let details = document.querySelectorAll("details");
details && details.forEach(function (e) {
  let t;
  [e.querySelector(".close-dropdown")].forEach(function (e) {
    console.log("toggle: " + e), e && e.addEventListener("click", t => {
      e.closest("details[open]")
        .removeAttribute("open")
    })
  })
});

let dialog = document.querySelectorAll("dialog");
dialog && dialog.forEach(function (e) {
  let t;
  [e.querySelector(".close-dialog")].forEach(function (e) {
    console.log("toggle: " + e), e && e.addEventListener("click", t => {
      e.closest("dialog").close();
    })
  })
});
