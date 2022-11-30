class SongController {
    constructor() {
        console.log('Song Controller has been fired');
    }

    list = (res) => {
        const sql = "SELECT id, title FROM song"
        db.query (sql, (err,result) => {
            if(err) {
                console.error(err)
            } else {
                res.json(result);
            }
        })
    }

    details = (req, res) => {
        const id = req.params.id || 0 

        const sql = "SELECT title, content, artist_id FROM song WHERE id= ?"
        db.query (sql, [id], (err,result) => {
            if(err) {
                console.error(err)
            } else {
                res.json(result);
            }
        })
    }
}

export default SongController