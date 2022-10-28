
var num = 2;
function play_music()
{
	var x = document.getElementById('mymusic');
	var y = document.getElementById('mu_img');
	
	if(num%2==0)
	{
		x.play();
		//alert(x.paused);
		y.src = 'images/music.png';
		num = num + 1;
	}
	else
	{
		
		x.pause();
		//alert(x.paused);
		y.src = 'images/guanbi_music.png';
		num = num + 1;
	}
}
