import express,{Router} from 'express'
import {postRegisterUser,postLoginUser} from '../controllers/userController'


const router : Router = express.Router()


router.post('/registerUser',postRegisterUser)   

router.post('/loginUser',postLoginUser)

export default router