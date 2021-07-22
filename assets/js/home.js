function openHomeDoors() {
  cursor.setAttribute('style', 'top: auto; left: auto; opacity: 0;');

  setTimeout(function () {
    cursor.setAttribute('style', 'top: auto; left: auto; display: none;');
  }, 100);

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
        document.getElementById("about").classList.remove("d-none");

        initParallaxEffect();
        initMouseParallaxEffect();

        document.querySelector("body").style.backgroundColor = "#000";

        setTimeout(function () {
          document.getElementById("main").classList.add("open");
        }, 200);
      }, 600);
    }, 600);
  }, 600);
}

function initParallaxEffect() {
  const stars = document.getElementById('stars');
  const moon = document.getElementById('moon');

  const name = document.getElementById('name');
  const am = document.getElementById('am');
  const title = document.getElementById('title');

  const montainsLeft = document.getElementById('montainsLeft');
  const stoneLeft1 = document.getElementById('stoneLeft1');
  const stoneLeft2 = document.getElementById('stoneLeft2');
  const montainsRight = document.getElementById('montainsRight');
  const stoneRight1 = document.getElementById('stoneRight1');
  const stoneRight2 = document.getElementById('stoneRight2');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.20 + 'px';

    moon.style.transform = `translateY(${value * 1.05}px)`;

    montainsLeft.style.transform = `translateX(${value * -0.1}px)`;

    stoneLeft1.style.top = `${value * -0.35}px`;
    stoneLeft1.style.left = `${value * -0.35}px`;

    stoneLeft2.style.top = `${value * -0.25}px`;
    stoneLeft2.style.left = `${value * -0.25}px`;

    montainsRight.style.transform = `translateX(${value * 0.1}px)`;

    stoneRight1.style.top = `${value * -0.10}px`;
    stoneRight1.style.right = `${value * -0.25}px`;

    stoneRight2.style.top = `${value * -0.15}px`;
    stoneRight2.style.right = `${value * -0.35}px`;

    name.style.transform = `translateY(${value * 1.30}px)`;
    am.style.transform = `translateX(${value * -1.30}px)`;
    title.style.transform = `translateX(${value * 1.30}px)`;
  })
}

function initMouseParallaxEffect() {
  var userHasScrolled = false;

  window.onscroll = function (e) {
    userHasScrolled = true;
  }

  document.addEventListener('mousemove', (e) => {
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxContainerX = parallaxContainer.getBoundingClientRect().x;
    const parallaxContainerY = parallaxContainer.getBoundingClientRect().y;
    const parallaxContainerW = parallaxContainer.getBoundingClientRect().width;
    const parallaxContainerH = parallaxContainer.getBoundingClientRect().height;

    if ((e.pageX > parallaxContainerX && e.pageX < parallaxContainerX + parallaxContainerW) &&
      (e.pageY > parallaxContainerY && e.pageY < parallaxContainerY + parallaxContainerH)) {
      if (userHasScrolled === false) {
        document.querySelectorAll('.layer').forEach(element => {
          const speed = element.getAttribute('data-speed');
          const x = (screen.width - e.pageX * speed) / 100;
          const y = (screen.height - e.pageY * speed) / 100;
          element.style.transform = `translate(${x}px, ${y}px)`;
          element.style.transform = `translate(${x}px, ${y}px)`;

          console.log(screen.width - e.pageX)
        });
      } else {
        userHasScrolled = false;
      }
    }
  });
}