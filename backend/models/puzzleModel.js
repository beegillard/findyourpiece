const db = require('../db');

const getPuzzles = (req, res) => {
      db.query("SELECT * FROM puzzles", (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
};

const getPuzzleById = (req, res) => {

  db.query("SELECT * FROM puzzles WHERE id = $1", [req.params.id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
};

const getPuzzlePieces = (req, res) => {
    const puzzle_id = req.params.id;
    db.query("SELECT * FROM pieces WHERE puzzle_id =$1", [puzzle_id], (error, result) => {
        res.status(200).json(result.rows);
    })
}

//page will have form for row and column inputs
const getPuzzlePiece = (req, res) => {
    const {puzzle_id, row, column} = req.params;
    const format = (number) => {
        let formatted;
        if (number < 10) {
            formatted = "00" + number.toString();
        } else if (number < 100) {
            formatted = "0" + number.toString();
        } else {
            formatted = number.toString();
        }
        return formatted;
    }
    const pieceName = puzzle_id.toString() + format(row) + format(column);
    db.query("SELECT * FROM pieces WHERE name = $1", [pieceName], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
};


module.exports = {
    getPuzzles,
    getPuzzleById,
    getPuzzlePieces,
    getPuzzlePiece
};