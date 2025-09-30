document.addEventListener('DOMContentLoaded', function() {
    console.log("main.js is connected");

    const buttons = document.querySelectorAll('.button');
    const divs = document.querySelectorAll('div');
    const group = document.querySelectorAll('.group');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

            buttons.forEach(function(button) {
                button.addEventListener('click', function() {
                    buttons.forEach(function(div) {
                        if(div.computedStyleMap.display === 'none') {
                            div.style.display = 'inline-block';
                        } else {
                            div.style.display = 'none';
                        }
                        const buttonTargetId = this.getAttribute('data-target');
                        // Do something with buttonTargetId
                    });
                });
                button.classList.toggle('active', button.getAttribute('data-target') === targetId);
            });
        });
    });
});
// This script adds click event listeners to elements with the class 'circle'.
        button.)
