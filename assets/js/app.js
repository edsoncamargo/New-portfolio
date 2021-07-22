const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    const hello = document.getElementById('hello');
    const helloY = hello.getBoundingClientRect().y;
    const helloX = hello.getBoundingClientRect().x;

    if ((e.pageY > helloY && e.pageY < helloY + hello.clientHeight) &&
        (e.pageX > helloX && e.pageX < helloX + hello.clientWidth)) {
        document.querySelector('body').setAttribute('style', 'cursor: none');
        cursor.setAttribute('style', 'top: ' + (e.pageY - 40) + 'px; left: ' + (e.pageX - 40) + 'px; display: inline-block;');
    } else {
        document.querySelector('body').setAttribute('style', 'cursor: auto');
        cursor.setAttribute('style', 'top: auto; left: auto;');
    }
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500)
})