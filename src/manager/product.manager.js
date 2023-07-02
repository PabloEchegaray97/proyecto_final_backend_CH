import FileManager from "./file.manager.js";

export default class ProductManager extends FileManager {
    constructor() {
        super('./products.json')
    }

    create = async (data) => {
        const result = await this.set(data)
        return result
    }

    getNextID = async () => {
        try {
            const list = await this.getProduct();
            const nextID = (list.length > 0) ? list[list.length - 1].id + 1 : 1;
            return nextID;
        } catch (error) {
            console.log('Error al obtener el próximo ID:', error);
            return null;
        }
    };

    addProduct = async (product) => {
        let flag = false;
        try {
            const productsList = await this.getProduct();
            const newProduct = {
                id: await this.getNextID(),
                ...product
            };

            productsList.forEach((element) => {
                if (element.code === newProduct.code) {
                    flag = true;
                }
            });

            if (!flag) {
                console.log(flag);
                productsList.push(newProduct);
                await this.set(productsList)
                console.log(`Se ha agregado el producto: ${newProduct.title}, ID: ${newProduct.id}`);
            } else {
                console.log('El código del producto ingresado ya existe, por favor ingresa otro.');
            }
            
        } catch (e) {
            console.log(e);
        }
    };

    getProduct = async () => {
        const result = await this.get()
        return result
    }
}
