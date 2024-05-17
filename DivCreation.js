function createDiv(width, height, text) {

    var Div = document.createElement('div'); Div.style.width = width + 'px'; Div.style.height = height + 'px'; Div.textContent = text; document.getElementById('container').appendChild(Div);
    
    }
    
    createDiv(100,200,'Hi')
    
    Window.createDiv = createDiv;