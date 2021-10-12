class NewController {
    //[GET]/ news
    index(req, res) {
        res.render('layouts/news');
    }

    //[GET] /news/:slug
                                         show(req, res) {
        res.send('Minh Hoang');
    }
}
module.exports = new NewController();
