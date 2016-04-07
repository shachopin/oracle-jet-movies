define(['ojs/ojcore', 'knockout', 'MovieFactory', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojbutton'],
function(oj, ko, MovieFactory) {

  var viewModel = {
    movieModel: ko.observable(),

    initialize: function(params) {
      this.movieModel(MovieFactory.createMovieModel());
    },

    // Save the movie and then redirect to main page.
    saveMovie: function() {
      this.movieModel().save().then(function() {
        oj.Router.rootInstance.go("movies");
      });
    }
  };

  return viewModel;
});
