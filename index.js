console.log("%c  GAME ON THE CHROME DEV TOOLS", "color:blue; font-size:50px");
console.log("%c  Click COMPUTE to start hacking", "color:red; font-size:40px");
function callback(){const e=document.getElementById("A").innerHTML,n=document.getElementById("B").innerHTML,t=document.getElementById("C").innerHTML,m=Number(e)+Number(n)==Number(t)?"green":"red",r=Number(e)+Number(n)==Number(t)?"CORRECT: ":"WRONG: ";document.getElementById("game").style.backgroundColor=m,alert(r+e+" + "+n+" = "+t),document.getElementById("A").innerHTML=Math.floor(1e7*Math.random()),document.getElementById("B").innerHTML=Math.floor(1e7*Math.random())}

var stop = true;

function compute(){
	const A = document.getElementById("A").innerHTML;
	const B = document.getElementById("B").innerHTML;

	if(stop){
		;debugger // TODO:  You need to write the correct result to level up!
		stop=false;
	}
	
	// 1) Press "CMD + \" 
	// 2) write the correct result 
	// 3) Press "CMD + S"
	const result = 0;

	document.getElementById("C").innerHTML = result;
	callback();
}
