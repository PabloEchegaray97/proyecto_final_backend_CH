import FileManager from "./file.manager";

class ProductManager extends FileManager{
    constructor() {
        super('./products.json')
    }
    listarProducts = () => {
        const result = this.get()
    }
}