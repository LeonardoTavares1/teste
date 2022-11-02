import express from 'express'
import { UsuarController } from './src/controllers/usuarCtrl.js'
import Multer from 'multer'
import { multerConfig } from './src/utils/multer.js'
import { FilesCtrl } from './src/controllers/filesCtrl.js'
import { GenCtrl } from './src/controllers/genCtrl.js'

//as rotas que enviam dados para o controller.

const routes = express.Router()

routes.get('/usuario/get', UsuarController.getUser)
routes.post('/usuario/insert', UsuarController.insertUser)
routes.put('/usuario/update/:userID', UsuarController.updateUser)
routes.delete('/usuario/delete/:userID', UsuarController.deleteUser)
routes.post('/usuario/login', UsuarController.loginUser)
routes.post('/usuario/getProfile', UsuarController.getUserProfile)

routes.post('/awsTeste', Multer(multerConfig).single('file'), FilesCtrl.ImgInsert)
routes.get('/img/get', FilesCtrl.GetImg)
routes.delete('/img/del/:imgID', FilesCtrl.deleteImg)
 
routes.get('/gen/get', GenCtrl.GetGen)
 

export { routes } 