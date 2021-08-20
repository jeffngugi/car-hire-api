import express from 'express'
import AdminController from '../controllers/AdminController'

const router = express.Router()

const {createAdmin, getAuth, login} = AdminController


router.post('/', createAdmin)
router.get('/auth', getAuth )
router.post('/login', login)

/**
 * Route to test admin endpoints
 */
router.get('/test', (req, res) =>
  res.json({
    msg: 'test admin works'
  })
);

export default router;