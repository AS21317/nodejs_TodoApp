import express from "express";
 import {  getMyProfile,  login, logout, register,  } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router= express.Router();


router.get("/logout",isAuthenticated, logout) 

router.post("/new",register )

router.post("/login",login )


// router.get("/userid/special", specialFunc)

// creating Dynamic Routes 

router.get("/me",isAuthenticated, getMyProfile)

// router.put("/userid/:id",updateUser)
// router.delete("/userid/:id",deleteUser) 

//* abobe all three line can be written in one line as below 

// router
// .route("/users/:id")
// .get(getUserDetails)
// .put(updateUser) 
// .delete(deleteUser)
 









export default router;