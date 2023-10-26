import express,{Router} from 'express'
import { submitPost } from '../controllers/postController'
import { verifyAuth } from '../middlewares/verifyAuth'

const router : Router = express.Router()


router.post("/upload",verifyAuth,submitPost)

export default router