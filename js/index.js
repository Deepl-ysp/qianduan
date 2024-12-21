function buttonLeftClick(I, A, B, C) {
    I.classList.add('active');
    A.classList.remove('active');
    B.classList.remove('active');
    C.classList.remove('active');
}

var quriLeftButton = document.querySelectorAll('.items1 button');
var quriIndexBox = document.querySelectorAll('.index-box');
var quriTestbutton = document.getElementById('test-button');
var quritestBox = document.getElementById('test-box');

quriLeftButton.forEach(button => {
    button.addEventListener('click', function () {
        const buttons = Array.from(document.querySelectorAll('.items1 button'));
        const activeButton = buttons.find(b => b.classList.contains('active'));
        if (activeButton) {
            activeButton.classList.remove('active');
        }
        this.classList.add('active');
    });
});

