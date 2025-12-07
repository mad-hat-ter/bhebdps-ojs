const menu = document.querySelectorAll('.menu__link');

for (let i = 0; i < menu.length; i ++){
        menu[i].onclick = function (event) {   
            if (menu[i].closest(`.menu`).classList.contains('menu_main') && menu[i+1].closest(`.menu`).classList.contains('menu_sub')){
                event.preventDefault();
                if (menu[i+1].closest(`.menu_sub`).classList.contains(`menu_active`)){
                    menu[i+1].closest(`.menu_sub`).classList.remove(`menu_active`)
                }
                
                else{
                    for (let j = 0; j < menu.length-1; j ++){
                        if (menu[j].closest(`.menu`).classList.contains('menu_main') && menu[j+1].closest(`.menu`).classList.contains('menu_sub') && menu[j+1].closest(`.menu_sub`).classList.contains(`menu_active`)){
                            menu[j+1].closest(`.menu_sub`).classList.remove(`menu_active`)
                        }
                    }
                    menu[i+1].closest(`.menu_sub`).classList.add(`menu_active`);
                }
            }
        } 
}