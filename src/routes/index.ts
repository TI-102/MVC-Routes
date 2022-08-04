import { Router } from 'express'
import * as PageController from '../controllers/pageController'



//criando rota
const router = Router()


//criando rotas
router.get('/',PageController.home)
router.get('/cardapio',PageController.home)
router.get('/localizacao',PageController.home)
router.get('/menu',PageController.home)
router.get('/contato',PageController.home)




export default Router
