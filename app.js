const button = document.getElementById("pick-btn");
const box = document.getElementById("box");
const colorText = document.getElementById("color");

let pickedColor = "";

const abortController = new AbortController();

button.addEventListener("click", async function () {
  if ("EyeDropper" in window) {
    const eyeDropper = new EyeDropper();

    try {
      const result = await eyeDropper.open({ signal: abortController.signal });
      pickedColor = result.sRGBHex;
    } catch (e) {
      return null;
    }

    handleColorPicked();
  } else {
    alert("Sorry this browser does not support EyeDropper API!");
  }
});

function handleColorPicked() {
  colorText.innerText = pickedColor;
  box.style.backgroundColor = pickedColor;
}
