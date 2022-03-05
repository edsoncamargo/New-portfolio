function changeThemeByHour() {
  const stars = document.getElementById("stars");
  const moon = document.getElementById("moon");

  const montainsLeft = document.getElementById("montainsLeft");
  const stoneLeft1 = document.getElementById("stoneLeft1");
  const stoneLeft2 = document.getElementById("stoneLeft2");
  const montainsRight = document.getElementById("montainsRight");
  const stoneRight1 = document.getElementById("stoneRight1");
  const stoneRight2 = document.getElementById("stoneRight2");

  const elements = [
    moon,
    montainsLeft,
    stoneLeft1,
    stoneLeft2,
    montainsRight,
    stoneRight1,
    stoneRight2,
  ];

  if (isDayTime()) {
    stars.style.opacity = "0";
    moon.style.top = "0px";

    elements.forEach((element) => {
      const index = element.src.indexOf("/assets/images/home/night/");
      const filepath = element.src.substring(index);
      const newFilePath = filepath.replace("night", "day");
      element.src = `..${newFilePath}`;
    });
  }
}
