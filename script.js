/*form*/ 
let form = document.forms[0];
form.onsubmit = ()=>{
    alert('Форма успешно отправлена');
}
/*mobile_menu*/ 
let menu_button = document.querySelector('.menu_button');
let mobile_menu = document.querySelector('.mobile_menu');
let button_symbol = document.querySelector('.button_symbol');

menu_button.onclick = () => {
    mobile_menu.classList.toggle('openedMenu');
    if (button_symbol.innerHTML == 'close'){
        button_symbol.innerHTML = 'menu';
        button_symbol.style.color = 'black';
    }else {
        button_symbol.innerHTML = 'close';
        button_symbol.style.color = 'white';
    }
}


/*scroll_block*/
let scroll_block = document.createElement('div');
setInterval(()=>{ 
    if (window.pageYOffset > 1000){   
        scroll_block.className = 'scroll_block';
        scroll_block.style.display = 'block';
        scroll_block.innerHTML = `<span class="material-symbols-outlined">
        arrow_upward
        </span>`
        document.body.append(scroll_block);
    }else{
       scroll_block.style.display = 'none';
    }
}, 1000);
let header = document.querySelector('header');
scroll_block.onclick = ()=>{
    header.scrollIntoView({behavior: 'smooth'});
}






