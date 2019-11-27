Vue.component('star-rating', VueStarRating.default);

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