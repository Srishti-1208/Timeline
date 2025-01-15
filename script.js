let choice= document.querySelector("#button");
let name= document.querySelector("#name");
let head= document.querySelector("#head");
let ageBox = document.querySelector("#ageBox");
let para= document.querySelector("#para");

const wishes=["Wishing you a day as special as your heart, filled with love, joy, and countless blessings!",
    "On your special day, I hope you’re surrounded by warmth, laughter, and all the things that make you happiest",
    "The world is brighter because you’re in it. Happy Birthday to someone who makes life so much better for everyone!",
    "You’re not just another year older—you’re another year more awesome! Have a birthday as incredible as you are!",
    "May this birthday mark the beginning of an amazing chapter in your life filled with endless opportunities and joy.",
    "Wishing you endless happiness, unforgettable memories, and all the cake you can eat. Have a fabulous birthday!"
]
choice.addEventListener("click",()=>{

    let inputName= name.value;
    head.innerText=`🎂 Happy Birthday, ${inputName}! 🎉`;
    let radidx= Math.floor(Math.random()*wishes.length);
let wish= wishes[radidx];
para.innerText=wish;
let DOB= new Date(document.querySelector("#DOB").value);
let nowDate= new Date();
let age= nowDate.getFullYear()-DOB.getFullYear();
const monthDiff= nowDate.getMonth()-DOB.getMonth();
if(monthDiff<0 || (monthDiff===0 && nowDate.getDate()< DOB.getDate())){
    age--;
}
ageBox.innerText =`🎉 ${age} years of grace, strength, and beauty. Keep shining, superstar! 🌟`;
});

let print=document.querySelector("#print");
print.addEventListener("click",()=>{
    window.print();
});


