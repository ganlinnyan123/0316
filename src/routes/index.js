import {Router} from 'express';
import user from './user';
//import shop from './shop';
const router = Router();

router.use('/user',user)
//router.use('/shop',shop)

export default router;