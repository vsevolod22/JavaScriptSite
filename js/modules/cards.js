function cards() {
    // createCardClass


    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price; 
            this.parent = document.querySelector(parentSelector)
            this.transferToRub = 82;
            this.classes = classes;
            this.changeToRubls();
        }

        changeToRubls() {
            this.price = this.price * this.transferToRub;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu_item';
                element.classList.add(this.element);
                
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
        </div>
        `;
            this.parent.append(element);
        }
    }
    axios.get('http://localhost:3000/menu')
    .then (data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });

    });
}

export default cards;