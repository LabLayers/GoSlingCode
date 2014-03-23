/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.tracks = function(req, res) {
  res.render('tracks', {
    title: 'Tracks'
  });
};

exports.learn = function(req, res) {
  res.render('learn', {
    title: 'Learn'
  });
};

exports.code = function(req, res) {
	res.render('code', {
		title: 'Code',
    tutorial_name: req.query.lesson
	});
};

exports.tutorial = function(req, res) {

}