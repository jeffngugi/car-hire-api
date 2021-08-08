import express from 'express'
import AdminController from '../controllers/AdminController'

const router = express.Router()

const {createAdmin, getAuth} = AdminController


router.post('/', createAdmin)
router.get('/auth', getAuth )

/**
 * Route to test admin endpoints
 */
router.get('/test', (req, res) =>
  res.json({
    msg: 'admin works'
  })
);

export default router;