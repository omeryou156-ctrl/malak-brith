const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionPage = document.getElementById("questionPage");
const birthdayPage = document.getElementById("birthdayPage");

const loveText = document.getElementById("loveText");

const music = document.getElementById("music");



let yesCount = 0;



const messages = [

"I’m not convinced yet 🤔",
"Show me you really mean it ❤️",
"Press again if you really love me 😌",
"Hmm… I still need proof 😏",
"Are you sure about that? 👀",
"Okay okay… one more time 😄",
"I think you mean it now 🥹",
"Alright… I believe you ❤️"

];



yesBtn.addEventListener("click", () => {

yesCount++;

loveText.innerText = messages[yesCount-1];

if(yesCount >= 8){

questionPage.classList.add("hidden");
birthdayPage.classList.remove("hidden");

music.play();

}

});



/* زر No يهرب */

noBtn.addEventListener("mouseover", () => {

let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 50);

noBtn.style.position = "absolute";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

});



/* قلوب في الخلفية */

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},400);