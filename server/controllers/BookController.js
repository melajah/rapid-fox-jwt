const { Book } = require("../models");
class BookController {
  static addBook(req, res) {
    const buku = {
      title: req.body.title,
      author: req.body.author,
    };

    Book.create(buku)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        return res.status(500).json({ message: err });
      });
  }

  // static getBooks(req, res){
  //     Book.findAll()
  //     .then(data => {
  //         return res.status(200).json(data)
  //     })
  //     .catch(err => {
  //         return res.status(500).json({message : err})
  //     })
  // }

  static async getBooks(req, res) {
    try {
      const book = await Book.findAll();
      return res.status(200).json(book);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = BookController;
