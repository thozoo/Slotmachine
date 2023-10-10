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
    {
        var szorzo=0;
        for (let y of t[i].sorrend)
        {
            document.getElementById("s"+(i+1)).innerHTML += "<img class='kiskep' src='assets/images/"+y+".png' style='top:"+(160*szorzo)+"px'>";
            szorzo++;
        }
    }
}

Berak();

function Forgat()
{
    document.getElementById("forgatogomb").disabled = true;

    var k = document.getElementsByClassName("kiskep");

    for (let x of k)
    {
        // ITT KELL ÁLLÍTANI A TOPOT!!! DE NEM IS JÓ A TOP
    }

    //document.getElementById("forgatogomb").disabled = false;
}