document.body.onload = makeGrid;
function makeGrid(){
    var colorIndicator = false;
    for(let i1 = 0; i1 < 9; i1++){
        
        for(let i2 = 0; i2 < 9; i2++){
            const tile = document.createElement('div');
            var color;
            tile.style.width = '11.1%';
            tile.style.float = 'left';
            tile.style.paddingBottom = '11.1%';
            if(colorIndicator === false){
                color = 'black';
                colorIndicator = true;
            } else {
                color = 'red';
                colorIndicator = false;
            }
            tile.style.backgroundColor = color;
            document.body.appendChild(tile);
        }
        const newLine = document.createElement('div');
        newLine.textContent = "\n";
        document.body.appendChild(newLine);
    }
}