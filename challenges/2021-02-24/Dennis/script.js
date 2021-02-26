//I used "id" because I like ids...
var balloon = document.getElementById("inflatable");
//balloon.style.marginLeft = "200px";
//balloon.style.marginTop = "150px";
var size = 16;
document.addEventListener(
    "keydown",
    function checkKey(e) {
        var event = window.event ? window.event : e;
        e.preventDefault();
        if (event.keyCode == 38) {
            // up key makes it bigger
            size += 10;
            balloon.style.fontSize = size + "px";
        }
        if (event.keyCode == 40) {
            // down key makes it smaller
            size -= 10;
            balloon.style.fontSize = size + "px";
        }
        if (size >= 216) {
            // after 20 keystrokes it's replaced with an explosion
            balloon.textContent = "💥";
            // but the e.stopPropagation() and return seem to do nothing
            //e.stopPropagation(); this was having no effect anyway
            document.removeEventListener("keydown", checkKey);
            //
            return;
        }
        // added this code so one doesn't get trapped in a small balloon after clicking down 100 times
        if (size < 15) {
            size = 16;
        }
    },
    false // this had to be false...whoops
);

// up is 38, down is 40
