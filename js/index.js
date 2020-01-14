// Your code goes here
//bus logo
//mouseenter,mouseleave
const bus = document.querySelector(".busBig")
console.log(bus);

bus.addEventListener("mouseenter", () => {
  bus.style.transform ="scale(1.2)";
  bus.style.transition = "transform 0.3s"
} )
bus.addEventListener("mouseleave", () => {
  bus.style.transform = "scale(1)"
});


//first paragraph
//click
const intro = document.querySelector(".intro");

intro.addEventListener("click", () => {
    intro.style.backgroundColor = "blue";
});


//drag and drop
//dragstart,drag,dragover,drop,droptarget,
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  });
  
  document.addEventListener("drag", function(event) {
    
  });
  
  /* Events fired on the drop target */
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));  
    }
  });

 //content-destination 
 //transitionrun,transitionstart,transitionend
const transition = document.querySelector('.transition');
const message = document.querySelector('.message');

transition.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

transition.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

transition.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});


const fly = document.querySelector(".fly");

fly.addEventListener("click", () => {
    gsap.to(fly, { duration: 2.5, ease: "steps(12)", y: -500 });
    console.log("hi")
});
