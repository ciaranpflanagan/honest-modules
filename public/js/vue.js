Vue.component('star-rating', VueStarRating.default);

// Adding a review
new Vue({
  el: "#star-rating",
  methods: {
    setRating: function(rating){
      this.rating = rating;
    }
  },
  data:{
    rating: 3
  }
});

// Displaying review
new Vue({
  el: ".review-block"
});