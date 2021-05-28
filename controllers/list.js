const db = require('../database/mysql')

exports.getAll = async (req, res) => {
//   await db.query(`CREATE TABLE produse
// (
// id INT AUTO_INCREMENT PRIMARY KEY,
// denumire VARCHAR(50) NOT NULL,
// pret INT NOT NULL
// );`)

  try {
    res.status(200).send(await db.query(`SELECT * FROM produse`))
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.get = async (req, res) => {
  try {
    const [item] = await db.query(`SELECT * FROM produse WHERE id = ${req.params.id}`)
    if (item) {
      res.status(200).send(item)
    } else {
      res.status(404).send({
        message: 'Запись не найдена'
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.post = async (req, res) => {
  try {
    const columns = Object.keys(req.body).join(',')
    const values = Object.values(req.body).join('\',\'')
    const response = await db.query(`INSERT INTO produse (${columns}) VALUES ('${values}')`)
    const [insertedItem] = await db.query(`SELECT * FROM produse WHERE id = ${response.insertId}`)

    res.status(201).send(insertedItem)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.put = async (req, res) => {
  try {
    const updatedFields = Object.entries(req.body).map(([column, value]) => `${column} = '${value}'`)
      .join(', ')

    await db.query(`UPDATE produse SET ${updatedFields} WHERE id = ${req.params.id}`)
    const [insertedItem] = await db.query(`SELECT * FROM produse WHERE id = ${req.params.id}`)

    if (insertedItem) {
      res.status(200).send(insertedItem)
    } else {
      res.status(404).send({
        message: 'Запись не найдена'
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.patch = async (req, res) => {
  try {
    const updatedFields = Object.entries(req.body).map(([column, value]) => `${column} = '${value}'`)
      .join(', ')

    await db.query(`UPDATE produse SET ${updatedFields} WHERE id = ${req.params.id}`)
    const [insertedItem] = await db.query(`SELECT * FROM produse WHERE id = ${req.params.id}`)

    if (insertedItem) {
      res.status(200).send(insertedItem)
    } else {
      res.status(404).send({
        message: 'Запись не найдена'
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.delete = async (req, res) => {
  try {
    const response = await db.query(`DELETE FROM produse WHERE id = ${req.params.id}`)

    if (response.affectedRows) {
      res.status(200).send('Запись успешно удалена')
    } else {
      res.status(404).send({
        message: 'Запись не найдена'
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}
