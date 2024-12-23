var numSelected = null;
var tileSelected = null;

var errors = 0;
var board = [
    "-8--3-4--",
    "----5---1",
    "-----458-",
    "-57--2-9-",
    "9-------4",
    "-3-4--65-",
    "-792-----",
    "5---6----",
    "--6-4--2-"
]
var solution = [
    "785931462",
    "243856971",
    "691724583",
    "457612398",
    "968573214",
    "132498657",
    "379285146",
    "524167839",
    "816349725"
]
window.onload = function() {
    setGame();
}
function setGame() {
    // Digits
    for(let i=1; i<=9; i++){
        let number=document.createElement("div");
        number.id = i;
        number.innerText= i;
        number.addEventListener("click", selectNumber); 
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    // Sudoku Board
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++)
        {
            let tile=document.createElement("div");
            tile.id= r.toString()+"-"+c.toString();
            if(board[r][c]!='-')
           { 
            tile.innerText = board[r][c];
            tile.classList.add("tile-start");
           }
            if(r==2 || r==5)
            {
                tile.classList.add("horizontal-line");
            }
            if(c==2 || c==5)
            {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}
function selectNumber()
{
    if(numSelected !=null)
    {
        numSelected.classList.remove("number-selected");
    }
    numSelected= this;
    numSelected.classList.add("number-selected");
}
function selectTile()
{
    if (numSelected)
    {
        if (this.innerText!="")
        {
            return;
        }
        
        let coords= this.id.split("-");
        let r= parseInt(coords[0]);
        let c= parseInt(coords[1]);

        if (solution[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        }
        else
        {
            errors+=1;
            document.getElementById("errors").innerText = errors;
        }
    }
}