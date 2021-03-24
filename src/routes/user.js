import {Router} from 'express';
import UserController from '../controllers/userController';

const router = Router();


router.get('/',UserController.getUser)
router.post('/',UserController.postUser)
router.delete('/',UserController.deleteUser)
router.patch('/',UserController.editUser)

export default router;