import {express} from "express";

const router = express.router();

router.get("all", GetAllUsers);
router.get("/ById/:id", GetUser);
router.put("/", UpdateUser);
router.delete("/:Id", deleteUser);

export {router as UserRouter};