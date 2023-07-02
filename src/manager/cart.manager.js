import FileManager from "./file.manager";

class CartManager extends FileManager{
    constructor() {
        super('./products.json')
    }
    listarProducts = () => {
        const result = this.get()
    }
}