const express = require("express")
const router = express.Router()
// middleware auth
const auth = require("../middleware/auth")

const FilmController =require("../controllers/filmController");


router.post('/create',auth,FilmController.create);
router.get('/cat',FilmController.getRelasi);
router.get('/',auth,FilmController.get);
router.get('/:id',FilmController.getOne);
router.delete('/delete/:id',FilmController.delete);

module.exports = router;