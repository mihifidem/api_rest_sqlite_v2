const db = require('../db');

// import {db} from '../db';

exports.getUsers = (req, res) => {
    db.all("select * from users order by name", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json(rows);

    })
}

exports.createUser = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "chavalote el name es obligatorio" });
    db.run(
        "insert into users (name) values (?)",
        [name],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            db.get("SELECT * FROM users WHERE id=?", [this.lastID], (err, row) => {
                if (err) return res.status(500).json({ error: err.message });
                res.status(201).json(row);
            });
        }
    )

}