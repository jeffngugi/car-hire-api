import express from 'express'
import AdminController from '../controllers/AdminController'
import passport from 'passport'

const router = express.Router()

const {createAdmin, getAuth, login, getUsers} = AdminController


router.post('/', createAdmin)
router.get('/auth', getAuth )
router.post('/login', login)
router.get('/users',passport.authenticate("jwt", {session:false}) ,getUsers)

/**
 * Route to test admin endpoints
 */
router.get('/test', (req, res) =>
  res.json({
    msg: 'test admin works'
  })
);

export default router;