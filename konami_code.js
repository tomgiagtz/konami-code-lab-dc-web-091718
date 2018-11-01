const codes = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

function init() {
    index = 0;

    body = document.querySelector("body");
    body.addEventListener("keydown", konamiCheck);

    function konamiCheck(e) {
        
        let pressedKey = event.key;
        if (pressedKey === codes[index]) {
            index++;
        } else {
            index = 0;
        }

        if (index === codes.length) {
            alert("woah");
        }
    }
}
