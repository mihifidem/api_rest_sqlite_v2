const db = require('../db');

// import {db} from '../db';

exports.getTasks = (req, res) => {
    db.all("select * from tasks order by id", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json(rows);

    })
}

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: "chavalote el title es obligatorio" });
    db.run(
        "insert into tasks (title,description) values (?,?)",
        [title, description || null],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            db.get("SELECT * FROM tasks WHERE id=?", [this.lastID], (err, row) => {
                if (err) return res.status(500).json({ error: err.message });
                res.status(201).json(row);
            });
        }
    )

}