const startGame = () => 
{
    let player1Name = document.getElementById("p1name").value;
    let player2Name = document.getElementById("p2name").value;
    
    if (player1Name && player2Name)
    {
        displayBlocks("none", "block", "none");
        goToGame(player1Name.toUpperCase(), player2Name.toUpperCase());
    }
    else if (!player1Name && !player2Name) alert("fill all field");
    else if (player1Name && !player2Name) alert("fill Second field");
    else if (!player1Name && player2Name) alert("fill first field");    
}

//////////////////////////////////////////
const displayBlocks = (start, game, end) =>
{
    document.getElementById("start").style.display = start;
    document.getElementById("game").style.display = game;
    document.getElementById("end").style.display = end;
}

/////////////////////////////////////////
const goToGame = (player1Name, player2Name) => 
{
    document.getElementById("player1label").innerHTML = player1Name + "'s turn";
    document.getElementById("player2label").innerHTML = player2Name;
    displayBlocks("none", "block", "none");
}

////////////////////////////////////////
const turnChange = (label1, label2, element, text1split, text2split) => 
{
    if (element.innerHTML == 'X') 
    {
        label1.innerHTML = text1split[0].slice(0, text1split[0].length-2);
        label2.innerHTML += "'s turn";
        label1.style.color = "black";
        label2.style.color = "green";
    }
    else if(element.innerHTML == 'O')
    {
        label1.innerHTML += "'s turn";
        label2.innerHTML = text2split[0].slice(0, text2split[0].length-2);
        label2.style.color = "black";
        label1.style.color = "green";
    }
}

/////////////////////////////////////////
const select = value => 
{
    const l1 = document.getElementById("player1label");
    const l2 = document.getElementById("player2label");
    
    const t1s = l1.innerHTML.split(" ");
    const t2s = l2.innerHTML.split(" ");

    const a = document.getElementById(value).innerHTML;
    const e = document.getElementById(value);
    
    document.getElementById(value).style.color = "black";

    if (value === "one" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "two" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "three" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "four" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "five" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "six" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "seven" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "eight" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
    else if (value === "nine" && a == 'A') selectSub(e, t1s, t2s, l1, l2);
}

///////////////////////////////////////////
const selectSub = (element, text1split, text2split, label1, label2) =>
{
    element.innerHTML = text1split[1] == "turn" ? "X" : "O";
    turnChange(label1, label2, element, text1split, text2split);
    gameDecision(element.innerHTML, text1split[0], text2split[0]);
}

//////////////////////////////////////
const gameDecision = (op, p1, p2) =>
{
    const name = ["one","two","three","four","five","six","seven","eight","nine"];
    const b = [];

    for (let i=0; i<name.length; i++) b.push(document.getElementById(name[i]).innerHTML);

    if(b[0] == op && b[1] == op && b[2] == op) gDsub(op, p1, p2);
    else if(b[3] == op && b5 == op && b6 == op) gDsub(op, p1, p2);
    else if(b[6] == op && b8 == op && b9 == op) gDsub(op, p1, p2);
    else if(b[0] == op && b4 == op && b7 == op) gDsub(op, p1, p2);
    else if(b[1] == op && b5 == op && b8 == op) gDsub(op, p1, p2);
    else if(b[2] == op && b6 == op && b9 == op) gDsub(op, p1, p2);
    else if(b[0] == op && b5 == op && b9 == op) gDsub(op, p1, p2);
    else if(b[2] == op && b5 == op && b7 == op) gDsub(op, p1, p2);

    if(b[0]!='A' && b[1]!='A' && b[2]!='A' && b[3]!='A')
        if (b[4]!='A' && b[5]!='A' && b[6]!='A' && b[7]!='A' && b[8]!='A') 
            document.getElementById("tdiv").style.display = "grid";
}

////////////////////////////////////////////
const gDsub = (XorO, p1, p2) =>
{
    const pone = p1.slice(0, p1.length-2);
    const ptwo = p2.slice(0, p2.length-2);
    const wontext = document.getElementById("wontext");

    displayBlocks("none", "none", "block");

    wontext.innerHTML = (XorO == 'X' ? pone: ptwo)+" Wins";
}

///////////////////////////////////////////
const Quite = () =>
{   
    displayBlocks("none", "none", "block");
    document.getElementById("wontext").innerHTML = "This Game is a tie!";
}

/////////////////////////////////////////////
const tryAgain = () =>
{
    const name = ["one","two","three","four","five","six","seven","eight","nine"];
    for (let index = 0; index < name.length; index++)
    {
        document.getElementById(name[index]).innerHTML = 'A';
        document.getElementById(name[index]).style.color = "white";
    }

    document.getElementById("tdiv").style.display = "none";
}


/////////////////////////////////////////////
const Restart = () => location.reload(true);