var container=document.getElementById('container');
var tz;

Leap.loop(function(frame) {

  frame.hands.forEach(function(hand, index) {	
	if(!hand.isRight)
	{
	/*Difining unit vectors along x,y,z so I can see the angles along axes of user's  palm*/
	var vecx=Leap.vec3.create();
	var vecy=Leap.vec3.create();
	var vecz=Leap.vec3.create();
	vecx[0]=1;
	vecy[1]=1;
	vecz[2]=1;
	var normal = hand.palmNormal;
	var degx=(Math.acos(Leap.vec3.dot(vecx,normal))*180/Math.PI).toFixed(0);
	var degy=(Math.acos(Leap.vec3.dot(vecy,normal))*180/Math.PI).toFixed(0);
	var degz=(Math.acos(Leap.vec3.dot(vecz,normal))*180/Math.PI).toFixed(0);
	
	container.style.transform='rotateZ('+(degx-90)+'deg)';
	
    func(hand.screenPosition(), hand.roll());
	}
	
  });

}).use('screenPosition', {scale: 0.25});


function func(position, rotation) {
	
	
	var mx=parseInt(position[0].toFixed(0));//Hand's X
	var my=parseInt(position[1].toFixed(0));//Hand's Y	
	var mz=parseInt(position[2].toFixed(0));//Hand's Z	

	container.style.left = mx + 'px';
    container.style.top  = my + 'px';
	
	// tz=-(mz*2);
	// if(tz < -100)
	tz=-100;
	container.style.transform +='  rotateX(0deg) rotateY(180deg) translateZ('+ tz+'px) scale(0.5)';
	
	document.getElementById('city').style.perspectiveOrigin = (mx)+ 'px '+(my+100)+'px';
	
	
	/*For scaling the plane
	var s=(position[2]/90).toFixed(3);//scale
	if(s==0)
	s=1;
	//container.style.transform='scale('+ s + ')';*/
	
	
	//Working on rotation Use hand palm normal
	//container.style.transform = 'rotate(' + - rotation +'rad)';
 };

 
 /* for testing */
 
 document.getElementById('city').addEventListener("click",function(event){
 var mx= event.clientX;
 var my=event.clientY;
 container.style.left =  mx + 'px';
 container.style.top  = my + 'px';
	
	
	tz=-100;
	container.style.transform ='  rotateX(0deg) rotateY(180deg) translateZ('+ tz+'px) scale(0.5)';	
	document.getElementById('city').style.perspectiveOrigin = (mx)+ 'px '+(my+100)+'px';//make it -200
	
 })
 
 
 