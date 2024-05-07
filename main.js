// Functionize Minecraft Fishing Start Code

// HTML Variables
let steveImgE1 = document.getElementById("steve-img");
let alexImgE1 = document.getElementById("alex-img");
let fishbtnE1 = document.getElementById("fish-btn");
let imgResultE1 = document.getElementById("img-result");
let numCodE1 = document.getElementById("num-cod");
let numSalmonE1 = document.getElementById("num-salmon");
let numTropicalE1 = document.getElementById("num-tropical");
let numPufferE1 = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let untill200Btn = document.getElementById("untill200");
let sortBtn = document.getElementById("sortBtn");

// Global Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
steveImgE1.addEventListener("click", selectSteve);
alexImgE1.addEventListener("click", selectAlex);
fishbtnE1.addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plus5);
untill200Btn.addEventListener("click", untill200);
sortBtn.addEventListener("");

function selectAlex() {
  // Update Active Border
  steveImgE1.classList.remove("active");
  alexImgE1.classList.add("active");

  // Update character slection Variable
  character = "Alex";
}

function selectSteve() {
  // Update Active Border
  alexImgE1.classList.remove("active");
  steveImgE1.classList.add("active");

  // Update character slection Variable
  character = "Steve";
}

function fishOnce() {
  // Test current character
  if (character === "Steve") {
    //Use Steve Probaility Distibution for Fish9ing
    let randNum = Math.random();

    // Steve Fish Simulator
    console.log(randNum);
    if (randNum < 0.7) {
      imgResultE1.src = "img/Raw-Cod.png";
      numCod = numCod + 1;
      numCodE1.innerHTML = numCod;
    } else if (randNum < 0.9) {
      imgResultE1.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon + 1;
      numSalmonE1.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      imgResultE1.src = "img/Tropical-Fish.png";
      numTropical = numTropical + 1;
      numTropicalE1.innerHTML = numTropical;
    } else {
      imgResultE1.src = "img/Pufferfish.png";
      numPufferE1.innerHTML = numPuffer;
    }
  } else {
    if (character === "Alex") {
      let randNum = Math.random();
      if (randNum < 0.1) {
        numCod = numCod + 1;
        imgResultE1.src = "img/Raw-Cod.png";
        numCodE1.innerHTML = numCod;
      } else if (randNum < 0.2) {
        numSalmon++;
        imgResultE1.src = "img/Raw-Salmon.png";
        numSalmonE1.innerHTML - numSalmon;
      } else if (randNum < 0.5) {
        numTropical++;
        imgResultE1.src = "img/Tropical-Fish.png";
        numTropicalE1.innerHTML = numTropical;
      } else {
        numPuffer++;
        imgResultE1.src = "img/Pufferfish.png";
        numPufferE1.innerHTML = numPuffer;
      }
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}

function untill200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishOnce();
    count++;
  }
  console.log(count);
}
