var now_id='';
var x = '';
//console.log(now_id);
//console.log(x);
var my = setInterval(function (){getfocus(x);},3000);
function change(s)
{

	var y = document.getElementById('m_left');
	var z_1 = document.getElementById('img_div1');
	var z_2 = document.getElementById('img_div2');
	var z_3 = document.getElementById('img_div3');
	var z_4 = document.getElementById('img_div4');
	
	if(s.match('m1'))
		{
			y.src='images/news1.jpg'; 
			z_1.style.border = "5px solid red";
			z_2.style.border = "5px solid white";
			z_3.style.border = "5px solid white";
			z_4.style.border = "5px solid white";
		}
	if(s.match('m2'))
		{
			y.src='images/news2.jpg'; 
			z_1.style.border = "5px solid white";
			z_2.style.border = "5px solid red";
			z_3.style.border = "5px solid white";
			z_4.style.border = "5px solid white";
		}
	if(s.match('m3'))
		{
			y.src='images/news3.jpg'; 

			z_1.style.border = "5px solid white";
			z_2.style.border = "5px solid white";
			z_3.style.border = "5px solid red";
			z_4.style.border = "5px solid white";
		}
	if(s.match('m4'))
		{
			y.src='images/news4.jpg'; 
			z_1.style.border = "5px solid white";
			z_2.style.border = "5px solid white";
			z_3.style.border = "5px solid white";
			z_4.style.border = "5px solid red";
		}
}
function getfocus(x)
{
	if(x=='' && now_id=='')
	{
		now_id='m1';
		
		change(now_id);
		
	}
	if(x!='' && now_id!='')
	{
		now_id = x;
		
		change(x);
	}
	if(x==''&now_id!='')
	{
		 if(now_id=='m1')
		{
			change('m2');

			now_id='m2';
			
			
		}
		else if(now_id=='m2')
		{
			change('m3');
			now_id='m3';
			
			
		}
		else if (now_id=='m3')
		{
			change('m4');
			now_id='m4';
			
			
		}
		else if(now_id=='m4')
		{
			change('m1');
			now_id='m1';
			
		}
	}
	if(x!=''&now_id=='')
	{
		now_id=x;
		
		change(x);
		
	}
}




/*
var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    console.log(t);
}*/