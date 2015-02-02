				/*GLOBAL VARIBALES*/
//buildings array
var barr = [];
var s=100;//s is speed of the buildings coming towards user

var t=0;//timestamp for clearing city

var n=0;//we have n number of buildings at any time
var buildingContainer=document.getElementById('bld');
var citycontainer=document.getElementsByClassName('container')[0];

//get plane
var plane = document.getElementById('container');

// get Every building divs
var bnodes=buildingContainer.children;

var movbarr;//this is movebarr setInterval handler
var pause = false;
var timer;
var roads=document.getElementsByClassName('middle')[0].children;

//status 
var output1=document.getElementById('output1');

				/*FUNCTIONS*/


//whenever , to create a new object

function newbuilding(){
//we have n number of buildings at any time
	n++;
	barr[n-1]=new building();
}

function building(){//building class for the buildings
  this.x=Math.floor((Math.random() * 2900) + 0);
  this.y=Math.floor((Math.random() * 500) + 100);//I'm not using
  this.z=Math.floor((Math.random() * 2000) + 1000);
  this.width=(Math.floor((Math.random() * 300) + 100));
  this.height=(Math.floor((Math.random() * 1000) + 200));
  this.depth=(Math.floor((Math.random() * 200) + 100));
  this.index=n-1;
  this.texture=Math.floor((Math.random() * 6) + 1);
 
/* THIS IS ONE METHOD
buildingContainer.innerHTML+=

'<div class="cube animate" style="left:'+this.x+'px;transform:translateX(500px) translateY(170px) translateZ(-'+this.z+'px);">'+
		'<div class="face1"></div>'+
		'<div class="face2"></div>'+
		'<div class="face3"></div>'+
		'<div class="face4"></div>'+
		'<div class="face5"></div>'+
		'<div class="face6"></div>'+
	'</div>';
*/
var div= document.createElement('div');
	//the following loop positions the sides of building in css3d space by setting the inline styling of faces as they are created
			
var buildingTexture='sky'+this.texture+'.jpg';//I have saved texture images like sky1,sky2,sky3...

for(i=1;i<7;i++){
	var face=document.createElement('div');
	face.setAttribute("class",'face'+i);
	
	switch(i){
	case 1:face.setAttribute("style",'background:url(assets/'+buildingTexture+');width:'+this.width+'px;height:'+this.height+'px;transform:rotateY(0deg) translateZ('+this.depth/2+'px);');break;//frontside

	case 2:face.setAttribute("style",'background:url(assets/'+buildingTexture+');width:'+this.width+'px;height:'+this.height+'px;transform:rotateX(180deg) translateZ('+this.depth/2+'px);');break;//backside

	case 3:face.setAttribute("style",'background:url(assets/'+buildingTexture+');left:'+(this.width-this.depth)/2+'px;width:'+this.depth+'px;height:'+this.height+'px;transform:rotateY(90deg) translateZ('+this.width/2+'px);');break;//right side

	case 4:face.setAttribute("style",'background:url(assets/'+buildingTexture+');left:'+(this.width-this.depth)/2+'px;width:'+this.depth+'px;height:'+this.height+'px;transform:rotateY(-90deg) translateZ('+this.width/2+'px);');break;//left side

	case 5:face.setAttribute("style",'top:'+(this.height-this.depth)/2+'px;width:'+this.width+'px;background:#eee;height:'+this.depth+'px;transform:rotateX(90deg) translateZ('+this.height/2+'px);');break;//up 

	case 6:face.setAttribute("style",'top:'+(this.height-this.depth)/2+'px;background:black;width:'+this.width+'px;height:'+this.depth+'px;transform:rotateX(-90deg) translateZ('+this.height/2+'px);');break;//down
	}
	div.appendChild(face);
}
	
	div.setAttribute("class","cube");
	
	div.setAttribute("style", 'top:0px;left:'+(this.x-580)+'px;transform:translateX(0px) translateY('+(500-this.height)+'px) translateZ(-'+this.z+'px) ;'+'width:'+this.width+'px;height:'+this.height+'px;');
	buildingContainer.appendChild(div);	
}

/*
building.prototype={
	dimensions:function(){
	return 'width:'+this.width+' depth: '+this.depth +' height:'+this.height + '.';},

	move:function(){
	//movement defined though never used
	bnodes[this.index].style.transform='translateX(0px) translateY('+(500-this.height)+'px) translateZ(-'+this.z+'px) ;'+'width:'+this.width+'px;height:'+this.height+'px;'
	},
	//there should be this function 
	destroy:function(){
	//this function is roaming somewhere in the ideal world
	}
	
};
*/
function clearcity(){ 
	 //delete the first set of buildings: first 9 buildings
	 for(i=0;i<14;i++)
	 buildingContainer.removeChild(buildingContainer.children[0]); 
 
	 bnodes=buildingContainer.children;
	 //delete the fist 9 entries from barr as well
	 barr.splice(0,14);
	 n=n-14; 
}

function movebarr(){//move the whole building array
t++;//timestamp
if(t==22)
{	
	thetimer();
} 

if(t==44)
{
	t=t-22;
	thetimer();
	clearcity();
}

for(i=0;i<bnodes.length;i++){
		barr[i].z -= (s);//speed

		/*OPACITY depends upon it's distance in z-axis*/
		if(barr[i].z < 100)
		bnodes[i].style.opacity=-((-barr[i].z)/100) +1;
		
		bnodes[i].style.transform='translateX(0px) translateY('+(500-barr[i].height)+'px) translateZ('+(-barr[i].z)+'px)';
}
	var rtx=t-10;//following moves the roads of the city 
	if(t>22)
		rtx=t-22;
	document.getElementsByClassName('middle')[0].style.transform='translateZ('+(rtx*100)+'px)';
	
	if(barr[0]!=null)
		{//since we have new position of barr[0] after above loop
		output1.innerHTML='timestamp:' + 100*t +' N: ' + n +' bnodes: '+bnodes.length+ ' barr: '+barr.length;	
	}
	//detectCollision();
}

/*NEED A PERFECT COLLISION FUNCTION
function detectCollision(){
	for(j=0;j<bnodes.length;j++){
		var pl = parseInt(plane.style.left);//plane left and plane top
		var pt = parseInt(plane.style.top);
		var pz;
		
	if( pl > (parseInt(bnodes[j].style.left)+30)//offset seems to be 35 so that plane is inside
	&& pl < (parseInt(bnodes[j].style.left) + parseInt(bnodes[j].style.width)+30)
	&& pt > (500-parseInt(bnodes[j].style.height))
	&& (-barr[j].z) > -100 && (-barr[j].depth - barr[j].z)<-100)
		{
		console.log('collision detected');
		//collision detected explode the ship
		explodeAndStop();
		}
	}
}


function explodeAndStop(){
	t=0;
	plane.style.animation="explode 2s linear 2s infinite alternate";
	stopEverything();
}
*/
function stopEverything(){
	var btn=document.getElementById('stopbtn');
	btn.value=(pause)?"Pause  ||":"Play  >";
	pause=!pause;

	if(pause)
	{//need to retain the position of the building
	clearInterval(timer);
	clearInterval(movbarr);}
	else
	{movbarr=setInterval(movebarr,100);}
}

					/*TIMERS*/
					
function thetimer(){//this timer gets new set of buildings 					
	timer=setInterval(newbuilding,100); //make a new building every 100 ms also notice that the timer is global var
	setTimeout(function(){clearInterval(timer);},1500);//Get Initial buildings
}
	 
window.onload=function(){
	//start to have buildings
	thetimer();
	setTimeout(function(){
		movbarr=setInterval(movebarr,100);
		},4000//introducing a 5 sec delay and then continous movebarr
	);
	document.getElementById('container').style.left=window.innerWidth/2 + 'px'; 
	document.getElementById('container').style.top=window.innerHeight/2 + 'px'; 

	setTimeout(function(){
	document.getElementsByClassName('loader')[0].setAttribute('class','loader hidden');},4000);//Loader screen fades
}
