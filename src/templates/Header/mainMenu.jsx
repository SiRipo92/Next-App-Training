import data from '@/data/header.json';

class MainMenu {
    constructor() {
        this.mainMenuItems = (data?.menuLinks || []).map((link) => ({
            id: link.id,
            name: link.name,
            href: link.href,
            ariaLabel: link.ariaLabel,
            className: "main-menu-item",
            submenu: link.submenu || []
        }));
    }

    getMenuItems() {
        return this.mainMenuItems;
    }
}

export default new MainMenu();
