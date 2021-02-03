document.body.onload = makeGrid;
function makeGrid(){
    function randomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random()* 16)];
        }
        return color;
    }
    for(let i1 = 0; i1 < 9; i1++){
        for(let i2 = 0; i2 < 9; i2++){
            const tile = document.createElement('div');
            tile.style.width = '11.1%';
            tile.style.float = 'left';
            tile.style.paddingBottom = '11.1%';
            tile.style.backgroundColor = (randomColor())
            document.body.appendChild(tile);
        }
        const newLine = document.createElement('div');
        newLine.textContent = "\n";
        document.body.appendChild(newLine);
    }
}