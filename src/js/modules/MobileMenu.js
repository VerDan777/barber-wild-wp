import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.mainMenu = $('.main-menu');
        this.menuButton = $('.main-nav__menu-icon');
        this.events();
    }

    events() {
        this.menuButton.click(
            this.toggleMenu.bind(this)
        );
    }

    toggleMenu() {
        this.mainMenu.toggleClass('main-menu--shown');
        this.menuButton.toggleClass('main-nav__menu-icon--close-x');
    }
}

export default MobileMenu;