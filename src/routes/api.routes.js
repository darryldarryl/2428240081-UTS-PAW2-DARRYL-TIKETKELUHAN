import express from 'express'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import keluhancontroller from '../controllers/keluhan.controller.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)
router.get('/keluhan/', keluhancontroller.index)
router.get('/keluhan/:id', keluhancontroller.show)
router.post('/keluhan', keluhancontroller.store)
router.put('/keluhan/:id', keluhancontroller.update)
router.delete('/keluhan/:id', keluhancontroller.delete)

export default router
