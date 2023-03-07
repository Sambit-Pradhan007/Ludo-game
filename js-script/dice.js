var P1=prompt("Enter Player1 Name below");
var P2=prompt("Enter Player2  Name below");

document.getElementById("p1name").innerText=P1;
document.getElementById("p2name").innerText=P2;
alert("Anyone can Start the Game");

let p1sum=0;
function randomnum1(){
//    to get random number
    var randomnum= Math.floor(Math.random() * 6) + 1;   
    // 1 to 6 random.
    return randomnum;
}

// for image change1
function imagechange(){
    // getting random num
    let num1= randomnum1();
    // setting image for image/player1
    var imagename="./images/dice" + num1 +".png";
    // setting style of button
    document.getElementById("player1").style.backgroundColor="grey";
    // getting the source of image1 and setting/changing
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src" , imagename);
    // button1 color adding
    document.getElementById("player1").style.backgroundColor="#4ECCA3";
    document.getElementById("player1").style.color="black";
    return num1;
}

// adding points
function pointschange1(){
    let gotnum1=imagechange();
    p1sum+=gotnum1;
    document.querySelector("#point1").innerText="Points:- "+p1sum;
    // showing who and how much points got
    var pname1=document.getElementById("p1name").innerText;
    if(p1sum>100){
        document.querySelector("h1").textContent="🚩 "+pname1 + " Wins";
        document.getElementById("player1").style.display="none";
        return;
     }
     document.querySelector("h1").textContent="YaY "+ pname1+" got "+gotnum1+" point.";
     return p1sum;
}
// let player1count=0;
// function count1(){
//  player1count+=1;
//  console.log(player1count);
//  return player1count;
// }

// button1 event listener
//for button 1
var btn=document.getElementById("player1");
btn.addEventListener("click",imagechange);
btn.addEventListener("click",pointschange1);
// btn.addEventListener("click",count1);
btn.addEventListener("click",hide1);
function hide1(){
    if(p1sum>100){
        document.getElementById("player1").style.display="none";
    }else{
    document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="initial";
    }
}


//For player2
function randomnum2(){
   
    var num2=Math.floor(Math.random() * 6) + 1;   
    // 1 to 6 random.
    return num2;
}

//image change2
let p2sum=0;
function imagechange2(){
    // getting randomnum.
    let num2= randomnum2();
    // geting image location and storing in a vaiable
    document.getElementById("player2").style.backgroundColor="grey";
    var name2="./images/dice" + num2+".png";
    //Setting image to transform a little.
    var image2=document.querySelectorAll("img")[1];
    image2.style.appearance="easein";
    // Set attribute for image chnage
    image2.setAttribute("src" , name2);
    // Styling the butoon.
    document.getElementById("player2").style.backgroundColor="#4ECCA3";
    document.getElementById("player2").style.color="black";
return num2;
}
 // adding points
 function pointschange2(){
   let gotnum=imagechange2();
  p2sum+=gotnum
 document.querySelector(".point2").innerText="Points:- "+p2sum;
 var pname2=document.getElementById("p2name").innerText;
 if(p2sum > 100){
    document.querySelector("h1").textContent=pname2+" Wins 🚩";
    document.getElementById("player2").style.display="none";
    return p2sum;
 }
 document.querySelector("h1").textContent="YaY "+pname2+" got "+gotnum +" point.";
 return p2sum;
 }

//  let player2count=0;
// function count2(){
//  player2count+=1;
//  console.log(player2count);
//  return player2count;
// }
// button2 eventlistener
// for buttton 2
var btn2=document.getElementById("player2");
btn2.addEventListener("click", imagechange2);
btn2.addEventListener("click",pointschange2);
// btn2.addEventListener("click",count2);
btn2.addEventListener("click",hide2);
function hide2(){
    if(p2sum>100){
        document.getElementById("player2").style.display="none";
    }else{
    document.getElementById("player2").style.display="none";
    document.getElementById("player1").style.display="initial";
    }
}