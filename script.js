var punkty = 0;
var sec = 25;
var powtarzaj = true;
var haslo ="1234567";
var haslo1 = "";
var dlugosc = haslo.length;
var kolory = [];
var sprawdzana = 1;
var uruchomienie = 0;
var migniecia = 0;

function instrukcja()
{
	document.getElementById("uklad").style.background = "#413839";
	alert("After clicking the START button you have to click on the colors in the right order");
	document.getElementById("uklad").style.background = "grey";
}

function rozruch()
{	
	if(uruchomienie==0)
	{
		odliczanie();
		wypisz_punkty();
		wypisz_haslo();
		uruchomienie++;
		document.getElementById("start").innerHTML = "STOP";
	}
	else
	{
		location.reload();
	}
}

function miganie()
{
	if(migniecia<5)
	{	
		document.getElementById("czas").style.fontSize = "0";
		setInterval(miganie1, 1000);
		migniecia++;
	}
	else
	{
		return;
	}
}

function miganie1()
{
	
	document.getElementById("czas").style.fontSize = "30";
	setInterval(miganie, 1000);
}



function wypisz_haslo()
{
	for(a=1;a<=9;a++)
	{
		var z=Math.random()*8;
		z=Math.round(z);
		if(z==0)
		{
			document.getElementById("uklad"+a).style.background = "brown";
			document.getElementById("uklad"+a).innerHTML = z;
			
		}
		else if(z==1)
		{
			document.getElementById('uklad'+a).style.background = "white";
			document.getElementById("uklad"+a).innerHTML = z;
		}
		else if(z==2)
		{
			document.getElementById('uklad'+a).style.background = "purple";
			document.getElementById("uklad"+a).innerHTML = z;
		}
		else if(z==3)
		{
			document.getElementById("uklad"+a).style.background = "pink";
			document.getElementById("uklad"+a).innerHTML = z;
		}
		else if(z==4)
		{
			document.getElementById("uklad"+a).style.background = "yellow";
			document.getElementById("uklad"+a).innerHTML = z;
		}
		else if(z==5)
		{
			document.getElementById("uklad"+a).style.background = "blue";
			document.getElementById("uklad"+a).innerHTML = z;
		}
		else if(z==6)
		{
			document.getElementById("uklad"+a).style.background = "orange";
			document.getElementById("uklad"+a).innerHTML = z;
		}
		else if(z==7)
		{
			document.getElementById("uklad"+a).style.background = "green";
			document.getElementById("uklad"+a).innerHTML = z;
		}
		else if(z==8)
		{
			document.getElementById("uklad"+a).style.background = "red";
			document.getElementById("uklad"+a).innerHTML = z;
		}
	}
}

function wypisz_punkty()
{
	document.getElementById("punkty1").innerHTML =punkty;
	if(punkty>200)document.getElementById("punkty1").style.color = "green";
	else if(punkty>150)document.getElementById("punkty1").style.color = "orange";
	else document.getElementById("punkty1").style.color = "red";
}

function dodaj_punkty()
{
	punkty=punkty+sec+1;
	if(sprawdzana==9)
	{
		wypisz_punkty();
		powtarzaj=false;
		document.getElementById("start").innerHTML = "RESET";
	}
	
}


function odliczanie()
{
	if(powtarzaj==true)
	{
		if(sec==20)
		{
			document.getElementById("czas").style.color="orange";
		}
		if(sec==10)
		{
			document.getElementById("czas").style.color="red";
		}
		document.getElementById("czas").innerHTML=sec;
		sec--;
		if(sec==0) 
		{
			powtarzaj=false;
		}
		setTimeout("odliczanie();", 1000);
	}
}

function sprawdz(a)
{
	var b = document.getElementById("uklad"+sprawdzana).innerHTML;
	if(b == a)
	{
		if(sprawdzana==9)
		{	
			dodaj_punkty();
			document.getElementById("uklad"+sprawdzana).style.borderColor = "#413839";
			sprawdzana++;
			setInterval(miganie, 1000);
		}
		dodaj_punkty();
		document.getElementById("uklad"+sprawdzana).style.borderColor = "#413839";
		sprawdzana++;	
	}
}
