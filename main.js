const btn = document.getElementById('btn');
const arrayEmoji = ["🍇", "🍈", "🍉", "🍊", "🍋","🍄"];
let slots = document.getElementById('slots');
 
btn.addEventListener('click', function () {
  for (let i = 0; i < 250; i++) {
    let newDiv = document.createElement('div');
    let emoji = Math.floor(Math.random() * arrayEmoji.length);
    newDiv.innerHTML = arrayEmoji[emoji];
    newDiv.classList.add = "slot";
    newDiv.style.position = "fixed";
    newDiv.style.top = Math.floor(Math.random() * 100)+'%';
    newDiv.style.left = Math.floor(Math.random() * 100)+'%';
    newDiv.style.animation = `radialKeyframes 1.2s ease-in-out `;
    slots.appendChild(newDiv);
    newDiv.addEventListener("animationend", function () {
      slots.removeChild(newDiv);
    });
  } 
});

const radialKeyframes = `
@keyframes radialKeyframes {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) ;
  }

  75%{
   opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(110%, 110%) ;
  }
}`;
const style = document.createElement('style');
style.innerHTML = radialKeyframes;
document.head.appendChild(style);