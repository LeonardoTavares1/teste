import express from 'express'
import { UsuarController } from './src/controllers/usuarCtrl.js'
import Multer from 'multer'
import { multerConfig } from './src/utils/multer.js'
import { ImgCtrl } from './src/controllers/imgCtrl.js'

//as rotas que enviam dados para o controller.

const routes = express.Router()

routes.get('/usuario/get', UsuarController.getUser)
routes.post('/usuario/insert', UsuarController.insertUser)
routes.put('/usuario/update/:userID', UsuarController.updateUser)
routes.delete('/usuario/delete/:userID', UsuarController.deleteUser)
routes.post('/usuario/login', UsuarController.loginUser)
routes.post('/usuario/getProfile', UsuarController.getUserProfile)

routes.post('/awsTeste', Multer(multerConfig).single('file'), ImgCtrl.Env)
routes.get('/img/get', ImgCtrl.GetImg)
routes.delete('/img/del/:imgID', ImgCtrl.deleteImg)


export { routes } 