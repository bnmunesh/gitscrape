const userController = require('../controllers/userController.js');

//router
const router = require('express').Router()


// fetch User from DB or fetch&save User to DB from api: http://localhost:8080/api/users
router.post('/users', userController.fetchOrSaveUserDetails);
//sorted users from db: http://localhost:8080/api/users?sort=username&by=asc
router.get('/users', userController.getUsers);
//fetch a user's followers
router.get('/users/followers/:username', userController.fetchFollowersController);
router.delete('/delete/force', userController.forceDeleteUser);


router.delete('/delete/:username', userController.softDeleteUser);
router.get('/users/update/:username', userController.updateUserDetails);


module.exports = router;