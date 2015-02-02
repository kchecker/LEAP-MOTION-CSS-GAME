//following code is for making the day-night rotation

var visualizer=document.getElementsByClassName('visualizer')[0];
var middle=document.getElementsByClassName('middle');
var details=document.getElementById('details');



//every 25 seconds change the day
var timehandler=setInterval(function(){
				/*roads
				
for(index=0;index<middle[0].children.length;index++){
	middle[0].children[index].classList.toggle('night');
} 

for(index=0;index<middle[1].children.length;index++){
	middle[1].children[index].classList.toggle('night');
} 
*/
				/*visualizer and background*/
visualizer.classList.toggle('night');
for(index=0;index<visualizer.children.length;index++){
	visualizer.children[index].classList.toggle('night');
} 
				/*details*/
document.getElementById('right_image').classList.toggle('night');

//document.getElementById('back_image').classList.toggle('night');

/*
for(index=0;index<details.children.length;index++){
	details.children[index].classList.toggle('night');
} 

*/

},15000);
