function openHomeDoors() {
  document.querySelector(".left").classList.add("open");
  document.querySelector(".right").classList.add("open");

  setTimeout(function () {
    document.getElementById("hello").classList.add("open");

    setTimeout(function () {
      setTimeout(function () {
        document.getElementById("home").classList.add("d-none");
        document.getElementById("hello").classList.remove("opening");
        document.getElementById("hello").classList.remove("open");
        document.getElementById("main").classList.remove("d-none");

        document.querySelector("body").style.backgroundColor = "#000";

        setTimeout(function () {
          document.getElementById("main").classList.add("open");
        }, 100);
      }, 600);
    }, 600);
  }, 600);
}
