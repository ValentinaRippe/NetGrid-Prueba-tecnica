const express = require("express");
const sequelize = require('./db')
const Board = require('./models/Board')


const app = express();

app.use(express.json());

//Routes

app.post('/boards', async (req, res) => {
    await Board.create(req.body);
    return res.status(200).send({msg:'board created'})
})

app.get('/boards', async (req, res) => {
    const boards = await Board.findAll();
    return res.status(200).send(boards)
})

app.get('/boards/:id', async (req, res) => {
    try {
        const board = await Board.findByPk(req.params.id)
        return res.status(200).send(board)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

app.put('/boards/:id', async (req, res) => {
    try {
        if(req.body.stage > 3) return res.status(400).send({ message: `Etapa incorrecta` })
        
        await Board.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        return res.status(200).send({ message: `Board actualizado` })
    } catch(err){
        return res.status(500).send(`Ha ocurrido un error: ${err}`)
    }
})

app.delete('/boards/:id', async (req, res) => {
    await Board.destroy({ where: { id: req.params.id } })
    res.send('removed board')
})

const PORT = 3000

async function main() {
    try {
        //await sequelize.sync({ force: true })
        await sequelize.sync()
        console.log("Connection has been established successfully.")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (err) {
        console.error("Unable to connect to the database:", err)
    }
}

main()