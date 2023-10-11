var t = [
    {
        sorrend: [0, 0, 0, 0]
    },
    {
        sorrend: [0, 0, 0, 0]
    },
    {
        sorrend: [0, 0, 0, 0]
    }
]

var tet = 100;

function AranyosVeletlenszam()
{
    var szam = Math.floor(Math.random()*100);
    var r = 0;
    if (szam<40) r=4; // citrom
    else if (szam<60) r=5; // szilva
    else if (szam<75) r=6; // hetes
    else if (szam<85) r=1; // cserkó
    else if (szam<92) r=7; // dinnye
    else if (szam<96) r=2; // dia
    else r=3; // jackpot
    return r;
}

function Berak()
{
    for (let i=0; i<t.length; i++)
    {
        for (let j=0; j<t[i].sorrend.length; j++)
        {
            t[i].sorrend[j] = 
            AranyosVeletlenszam()
        }
    }
    Rajzol();
}

function Rajzol()
{
    for (let i=0; i<t.length; i++)
    {
        document.getElementById("s"+(i+1)).innerHTML = "";
        for (let y of t[i].sorrend)
        {
            document.getElementById("s"+(i+1)).innerHTML += "<img class='kiskep' src='assets/images/"+y+".png'>";
        }
    }
}

Berak();

var forgatasok = 5;
var porogforog = null;

function Forgat()
{
    forgatasok = 5;
    document.getElementById("forgatogomb").disabled = true;
    porogforog = setInterval(Mozdit, 240);
}

function Mozdit()
{
    document.getElementById("s1").getElementsByClassName("kiskep")[0].style.marginTop = "-160px";
    document.getElementById("s2").getElementsByClassName("kiskep")[0].style.marginTop = "-160px";
    document.getElementById("s3").getElementsByClassName("kiskep")[0].style.marginTop = "-160px";

    setTimeout(function(){
        document.getElementById("s1").getElementsByClassName("kiskep")[0].remove();
        document.getElementById("s2").getElementsByClassName("kiskep")[0].remove();
        document.getElementById("s3").getElementsByClassName("kiskep")[0].remove();
    
        for (var i=0; i<t.length; i++)
        {
            t[i].sorrend.shift();
            t[i].sorrend.push(AranyosVeletlenszam());
        }
        Rajzol();
        forgatasok--;
        if (forgatasok == 0) 
        {
            clearInterval(porogforog);
            Ertekel();
            document.getElementById("forgatogomb").disabled = false;
        }
    }, 210);
}

function Ertekel()
{
    var a = t[0].sorrend[1];
    var b = t[1].sorrend[1];
    var c = t[2].sorrend[1];

    var szorzo = 1;
    
    // 1 = cseresznye

    if ( a==1 || b==1 || c==1 )
    {
        var mennyi = 0;
        if (a == 1) mennyi++;
        if (b == 1) mennyi++;
        if (c == 1) mennyi++;
        szorzo = mennyi*10;
        console.log("NYERT CSERESZNYÉVEL");
    }   

}