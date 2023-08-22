select = document.querySelector("select");
// console.log(select);
select.addEventListener("change", function () {
  gsap.fromTo(".smiley", { x: 0 }, { xPercent:20 });
  document.querySelector("#color").style.display = "none";
  document.querySelector("#button-restart").style.display = "block";
  const color = this.value;
  switch (color) {
    case "#1abc9c":
      document.getElementById("tete").style.backgroundColor = "#1abc9c";
      break;
    case "#f1c40f":
      document.getElementById("tete").style.backgroundColor = "#f1c40f";
      break;
    case "#d35400":
      document.getElementById("tete").style.backgroundColor = "#d35400";
      break;
    case "#e74c3c":
      document.getElementById("tete").style.backgroundColor = "#e74c3c";
      break;
    case "#40d47e":
      document.getElementById("tete").style.backgroundColor = "#40d47e";
      break;
    case "#3498db":
      document.getElementById("tete").style.backgroundColor = "#3498db";
      break;
    default:
      document.getElementById("tete").style.backgroundColor = "#bdc3c7";
  }
});

const button1 = document.querySelector("#btn1");
button1.addEventListener("click", (event) => {
  gsap.fromTo(".smiley", { xPercent: 20 }, { xPercent: 50 });

  gsap.fromTo("#bleux", { xPercent: 0 }, { xPercent: 150 });
document.querySelector("#oeil").style.display = "none";
document.querySelector("#blx").style.display = "block";
document.querySelector("#button-restart").style.display = "block";



});
const button2 = document.querySelector("#btn2");
button2.addEventListener("click", (event) => {
  
  gsap.fromTo(".smiley", { xPercent: 20 }, { xPercent: 50 });
  gsap.fromTo("#bruns", { xPercent: 0 }, { xPercent: 3 });
  gsap.fromTo("#bruns", { y: 0 }, { y: -680 });
  document.querySelector("#oeil").style.display = "none";
  document.querySelector("#brs").style.display = "block";
  document.querySelector("#button-restart").style.display = "block";

  
});
const button3 = document.querySelector("#btn3");
button3.addEventListener("click", (event) => {
  
  gsap.fromTo(".smiley", { xPercent: 20 }, { xPercent: 50 });
  gsap.fromTo("#verts", { xPercent: 0 }, { xPercent: -130 });
  gsap.fromTo("#verts", { y: 0 }, { y: -680 });
  document.querySelector("#oeil").style.display = "none";
  document.querySelector("#vts").style.display = "block";
  document.querySelector("#button-restart").style.display = "block";

});

const button4 = document.querySelector("#btn4");
button4.addEventListener("click", (event) => {
  
  gsap.fromTo(".smiley", { xPercent: 50 }, { xPercent: 68 });
  gsap.fromTo("#langue", { x: 0 }, { x: 1030 });
  gsap.fromTo("#langue", { y: 0 }, { y: -1040 });
  document.querySelector("#bouche").style.display = "none";
  document.querySelector("#lng").style.display = "block";
  document.querySelector("#button-validate").style.display = "block";
  document.querySelector("#button-restart").style.display = "block";

  
});

const button5 = document.querySelector("#btn5");
button5.addEventListener("click", (event) => {
  
  gsap.fromTo(".smiley", { xPercent: 50}, {xPercent:68});
  gsap.fromTo("#langueSourire", { x: 0 }, { x: 750 });
  gsap.fromTo("#langueSourire", { y: 0 }, { y: -1040 });
  document.querySelector("#bouche").style.display = "none";
  document.querySelector("#lngs").style.display = "block";
  document.querySelector("#button-validate").style.display = "block";
  document.querySelector("#button-restart").style.display = "block";

});

const button6 = document.querySelector("#btn6");
button6.addEventListener("click", (event) => {
  
  gsap.fromTo(".smiley", { xPercent: 50}, {xPercent:68});
  gsap.fromTo("#sourire1", { x: 0 }, { x: 450 });
  gsap.fromTo("#sourire1", { y: 0 }, { y: -1040 });
  document.querySelector("#bouche").style.display = "none";
  document.querySelector("#button-validate").style.display = "block";
  document.querySelector("#s").style.display = "block";
  document.querySelector("#button-restart").style.display = "block";

});

const button7 = document.querySelector("#btn7");
button7.addEventListener("click", (event) => {
  gsap.fromTo(".smiley", { xPercent: 50}, {xPercent:68});
  
  gsap.fromTo("#sourire2", { x: 0 }, { x: 140 });
  gsap.fromTo("#sourire2", { y: 0 }, { y: -1040 });
  document.querySelector("#bouche").style.display = "none";
  document.querySelector("#s1").style.display = "block";
  document.querySelector("#button-validate").style.display = "block";
});

const button8 = document.querySelector("#btn8");
button8.addEventListener("click", (event) => {
  gsap.fromTo(".smiley", { xPercent: 50}, {xPercent:68});
  gsap.fromTo("#triste", { x: 0 }, { x: -150 });
  gsap.fromTo("#triste", { y: 0 }, { y: -1040 });
  document.querySelector("#bouche").style.display = "none";
  document.querySelector("#t").style.display = "block";
  document.querySelector("#button-validate").style.display = "block";
  document.querySelector("#button-restart").style.display = "block";

});

const button9 = document.querySelector("#button-restart");
button9.addEventListener("click", (event) => {
  window.location.reload();
});
const button10 = document.querySelector("#button-validate");
button10.addEventListener("click", (event) => {
  gsap.to(".smiley", { 
    rotation: 360,
    x: '100vw',
    xPercent: -100,
    // special properties
    duration: 2, // how long the animation lasts
    
   
  });
  const titre = document.querySelector("h1");
console.log(titre);
titre.innerHTML="<h1>Good job! <img src='assets/bravo.png' class='titre' alt='title'></h1>"
  });
  

  


