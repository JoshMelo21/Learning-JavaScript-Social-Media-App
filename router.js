const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController.js");
const postController = require("./controllers/postController.js");
const followController = require("./controllers/followController.js");

//USER RELATED ROUTES
//home page
    router.get("/", userController.home);

//registration page
    router.post("/register", userController.register);

//login page
    router.post("/login", userController.login);

//logout page
    router.post("/logout", userController.logout);

    //LIVE VALIDATION
    router.post("/doesUsernameExist", userController.doesUsernameExist);
    router.post("/doesEmailExist", userController.doesEmailExist);


//PROFILE RELATED ROUTES
router.get("/profile/:username", userController.ifUserExists, userController.sharedProfileData, userController.profilePostsScreen);
router.get("/profile/:username/followers", userController.ifUserExists, userController.sharedProfileData, userController.profileFollowersScreen);
router.get("/profile/:username/following", userController.ifUserExists, userController.sharedProfileData, userController.profileFollowingScreen);

//POST RELATED ROUTES
router.get("/create-post", userController.mustBeLoggedIn, postController.viewCreateScreen);
router.get("/post/:id/edit", userController.mustBeLoggedIn, postController.viewEditScreen);
router.post("/post/:id/edit", userController.mustBeLoggedIn, postController.edit);
router.post("/create-post", userController.mustBeLoggedIn, postController.create);
router.post("/post/:id/delete", userController.mustBeLoggedIn, postController.delete);
router.get("/post/:id", postController.viewSingle);
router.post('/search', postController.search);

//FOLLOW RELATED ROUTES
router.post("/addFollow/:username", userController.mustBeLoggedIn, followController.addFollow);
router.post("/removeFollow/:username", userController.mustBeLoggedIn, followController.removeFollow);

module.exports = router;