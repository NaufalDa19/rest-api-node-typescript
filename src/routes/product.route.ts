import { Router } from 'express'
import { requireAdmin } from '../middleware/auth'
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
ProductRouter.get('/', getProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.post('/', requireAdmin, createProduct)
ProductRouter.put('/:id', requireAdmin, updateProduct)
ProductRouter.delete('/:id', requireAdmin, deleteProduct)
