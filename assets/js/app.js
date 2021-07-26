const cursor = document.querySelector('.cursor');
const cursorClick = document.querySelector('.cursor-click');

document.addEventListener('mousemove', e => {
    const hello = document.getElementById('hello');
    const helloY = hello.getBoundingClientRect().y;
    const helloX = hello.getBoundingClientRect().x;

    if ((e.pageY > helloY && e.pageY < helloY + hello.clientHeight) &&
        (e.pageX > helloX && e.pageX < helloX + hello.clientWidth) &&
        !cursor.classList.contains('none-cursor')) {
        document.querySelector('body').setAttribute('style', 'cursor: none');
        cursor.setAttribute('style', 'top: ' + (e.pageY - 40) + 'px; left: ' + (e.pageX - 40) + 'px; display: inline-block;');
    } else {
        document.querySelector('body').setAttribute('style', 'cursor: auto');
        cursor.setAttribute('style', 'top: auto; left: auto; display: none;');
    }
});

function initCustomCursorClickHandler() {
    document.addEventListener('mousemove', e => {
        const clickables = document.querySelectorAll('.clickable');
        let isClickable = false;

        clickables.forEach((clickable) => {
            const clickableY = clickable.getBoundingClientRect().y;
            const clickableX = clickable.getBoundingClientRect().x;


            if ((e.clientY > clickableY && e.clientY < clickableY + clickable.clientHeight) &&
                (e.clientX > clickableX && e.clientX < clickableX + clickable.clientWidth)) {
                document.querySelector('body').setAttribute('style', 'cursor: none;');
                cursorClick.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px; display: inline-block;');
                isClickable = true;
            }
        });

        if (isClickable === false) {
            document.querySelector('body').setAttribute('style', 'cursor: auto');
            cursorClick.setAttribute('style', 'top: auto; left: auto; display: none;');
        }
    });
}