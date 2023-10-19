const Router = require('express-promise-router');
const puzzles = require('../models/puzzleModel');
const router = new Router();

router.get('/', puzzles.getPuzzles);

router.get('/:id', puzzles.getPuzzleById);

router.get('/:id/pieces', puzzles.getPuzzlePieces);

//router.get('/:id/pieces/:name', puzzles.getPuzzlePiece);



  
  module.exports = router;