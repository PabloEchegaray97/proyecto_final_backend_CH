import {Router} from 'express'
import CartManager from '../manager/cart.manager.js'
const router = Router()
const cartManager = new CartManager();

router.get('/', async (req,res) => {
    const result = await cartManager.list()
    res.send(result)
})
router.get('/:cid', async (req,res) => {
    const carts = await cartManager.list()
    const idCart = parseInt(req.params.cid)
    res.send(carts[idCart-1])
})
router.post('/:idc/product/:idp', async (req,res) => {
    const idc = parseInt(req.params.idc)
    const idp = parseInt(req.params.idp)

    const result = await cartManager.addProduct(idc,idp)
    res.send(result)
})
router.post('/', async (req,res) => {
    res.send(await cartManager.create())
})
export default router