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

function Berak()
{
    for (let i=0; i<t.length; i++)
    {
        for (let j=0; j<t[i].sorrend.length; j++)
        {
            t[i].sorrend[j] = 
            Math.floor(Math.random()*7)+1;
        }
    }
    Rajzol();
}

function Rajzol()
{
    for (let i=0; i<t.length; i++)
    {''
        for (let y of t[i].sorrend)
        {
            document.getElementById("s"+(i+1)).innerHTML += "<img class='kiskep' src='assets/images/"+y+".png'>";
        }
    }
}

Berak();

function Forgat()
{
    document.getElementById("forgatogomb").disabled = true;

    document.getElementById("s1").getElementsByClassName("kiskep")[0].style.marginTop = "-160px";
    document.getElementById("s2").getElementsByClassName("kiskep")[0].style.marginTop = "-160px";
    document.getElementById("s3").getElementsByClassName("kiskep")[0].style.marginTop = "-160px";


    //document.getElementById("forgatogomb").disabled = false;
}