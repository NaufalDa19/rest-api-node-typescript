import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

// http://localhost:3000/health
HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Healthy check success')
  res.status(200).send({ status: '200' })
})
