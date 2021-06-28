const router = require("express").Router()
let notes = require("../db/db.json");
const uuid = require("uuid")

router.get(
    "/notes",
    (req, res) => {
    res.json(notes)
    }
)

router.post(
    "/notes",
    (req, res) => {
        const note = req.body;
        note.id = uuid.v1();
        notes.push(note);
        res.json(notes);
        }
    )

router.delete(
    "/notes/:id", (req, res) => {
    notes = notes.filter((note,index,array) =>  {
    return note.id !== req.params.id
    })
    res.json(notes)
    }

)

module.exports =  router;