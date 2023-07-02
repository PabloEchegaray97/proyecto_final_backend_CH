import {Router} from 'express'
import ProductManager from '../manager/product.manager.js'
const router = Router()
const productManager = new ProductManager();

router.get('/', async (req,res) => {
    try {
        const products = await productManager.getProduct()
        let limit = req.query.limit
        if (limit) {
            limit = parseInt(limit);
            const productsLimited = products.slice(0, limit)
            return res.send(productsLimited);
        }
        return res.send(products);
    } catch (error) {
        throw new Error('Error getting products');
    }
    
})

router.get('/:pid', async (req, res) => {
    try {
        const products = await productManager.getProduct();
        const pid = parseInt(req.params.pid);
        const productFiltered = products.filter(p => p.id === pid);

        if (productFiltered.length === 0) {
            throw new Error('Product not found');
        }
        return res.send(productFiltered);

    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
});


router.post('/', async (req, res) => {
    
    const result = await productManager.addProduct(req.body);
    res.send(result);
});

router.put('/:pid', async (req,res) => {
    try {
        const pid = parseInt(req.params.pid);
        const updatedProps = req.body;
        await productManager.updateProduct(pid, updatedProps);
        res.send(`Product updated -  ID:${pid}.`);
    } catch (error) {
        res.status(400).send({error: errror.message})
    }
})

router.delete('/:pid', async (req,res) => {
    try {
        const pid = parseInt(req.params.pid);
        await productManager.deleteProduct(pid);
        res.send(`Product deleted successfully - ID:${pid}`)
    } catch (error) {
        res.send(`Error:${error.message}`)
    }
})
export default router