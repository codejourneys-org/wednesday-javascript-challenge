const keyCodes = {
  38: inflate,
  40: deflate,

}


function getNumberFromFontSize(fontSize) {
  return Number(fontSize.replace('px', ''));
}
function inflate() {
  changeBaloonSize(1);

}

function deflate() {
  changeBaloonSize(-1);
}

function changeBaloonSize(direction) {

  const fontSize = getNumberFromFontSize(document.getElementById('balloon').style.fontSize);
  let newSize = fontSize + (10 * direction);
  if(newSize < 10) {
    newSize = 10;
  } else if (newSize > 100) {
    newSize = 100;
  }
  document.getElementById('balloon').style.fontSize = `${newSize}px`;
}
function onkeydownHanlder(e) {
  const { keyCode } = e || { keyCode: null };
  Object.prototype.hasOwnProperty.call(keyCodes, keyCode) && keyCodes[keyCode]();
}

document.onkeydown = onkeydownHanlder;