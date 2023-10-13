class NewsController {

    //[get] /news
    index(req, res){
        res.render('news')
    }

    //[get] /salg
    show(req,res) {
        res.send('News _ Slag')
    }
}

module.exports = new  NewsController