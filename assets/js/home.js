function openHomeDoors() {
  cursor.setAttribute('style', 'top: auto; left: auto; display: none;');
  cursor.classList.add('none-cursor');

  if (isDayTime()) {
    document.querySelector('.container').classList.add('day');
  } else {
    document.querySelector('.container').classList.add('night');
  }

  setTimeout(function () {
    document.querySelector('.left').classList.add('open');
    document.querySelector('.right').classList.add('open');
  }, 100);

  setTimeout(function () {
    document.getElementById('hello').classList.add('open');

    if (isDayTime()) {
      document.getElementById('hello').classList.add('day');
    } else {
      document.getElementById('hello').classList.add('night');
    }

    setTimeout(function () {
      setTimeout(function () {
        if (isDayTime()) {
          document.querySelector('body').style.background = '#9fd1ff';

          setTimeout(() => {
            entrar = false;
            document
              .querySelector('body')
              .setAttribute(
                'style',
                'cursor: auto; background-color: #494cab;'
              );
          }, 2000);
        } else {
          document.querySelector('body').style.background = '#2b2994';
        }

        document.getElementById('home').classList.add('d-none');
        document.getElementById('hello').classList.remove('opening');

        document.getElementById('hello').classList.remove('open');

        document.getElementById('main').classList.remove('d-none');
        document.getElementById('header').classList.remove('d-none');
        document.getElementById('about').classList.remove('d-none');
        document.getElementById('projects').classList.remove('d-none');
        document.getElementById('works').classList.remove('d-none');

        setTimeout(() => {
          document.getElementById('header').classList.add('header-opened');
        }, 200);

        changeThemeByHour();
        initCustomCursorClickHandler();
        initParallaxEffect();
        initMouseParallaxEffect();
        initSkillsEffect();

        setTimeout(function () {
          document.getElementById('main').classList.add('open');
        }, 200);
      }, 600);
    }, 600);
  }, 600);
}

function initParallaxEffect() {
  const navbarBrand = document.getElementById('navbarBrand');

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
    stars.style.left = value * 0.2 + 'px';

    navbarBrand.style.transform = `translateY(${value * -0.2}px)`;

    moon.style.transform = `translateY(${value * 1.05}px)`;

    if (window.screen.availWidth >= 1180) {
      montainsLeft.style.transform = `translateX(${value * -0.1}px)`;
    }

    stoneLeft1.style.top = `${value * -0.35}px`;
    stoneLeft1.style.left = `${value * -0.35}px`;

    stoneLeft2.style.top = `${value * -0.25}px`;
    stoneLeft2.style.left = `${value * -0.25}px`;

    if (window.screen.availWidth >= 1180) {
      montainsRight.style.transform = `translateX(${value * 0.1}px)`;
    }

    stoneRight1.style.top = `${value * -0.1}px`;
    stoneRight1.style.right = `${value * -0.25}px`;

    stoneRight2.style.top = `${value * -0.15}px`;
    stoneRight2.style.right = `${value * -0.35}px`;

    name.style.transform = `translateY(${value * 1.3}px)`;
    am.style.transform = `translateX(${value * -1.3}px)`;
    title.style.transform = `translateX(${value * 1.3}px)`;
  });
}

function initMouseParallaxEffect() {
  var userHasScrolled = false;

  window.onscroll = function (e) {
    userHasScrolled = true;
  };

  // document.addEventListener("mousemove", (e) => {
  //   const parallaxContainer = document.querySelector(".parallax-container");
  //   const parallaxContainerX = parallaxContainer.getBoundingClientRect().x;
  //   const parallaxContainerY = parallaxContainer.getBoundingClientRect().y;
  //   const parallaxContainerW = parallaxContainer.getBoundingClientRect().width;
  //   const parallaxContainerH = parallaxContainer.getBoundingClientRect().height;

  //   if (
  //     e.pageX > parallaxContainerX &&
  //     e.pageX < parallaxContainerX + parallaxContainerW &&
  //     e.pageY > parallaxContainerY &&
  //     e.pageY < parallaxContainerY + parallaxContainerH
  //   ) {
  //     if (userHasScrolled === false) {
  //       document.querySelectorAll(".layer").forEach((element) => {
  //         const speed = element.getAttribute("data-speed");

  //         const x = (screen.width - e.pageX * speed) / 100;
  //         const y = (screen.height - e.pageY * speed) / 100;

  //         element.style.transform = `translate(${x}px, ${y}px)`;
  //         element.style.transform = `translate(${x}px, ${y}px)`;
  //       });
  //     } else {
  //       userHasScrolled = false;
  //     }
  //   }
  // });
}
