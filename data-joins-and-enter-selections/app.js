var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];
<<<<<<< HEAD
var colors = {
  "G" : "#3cff00",
  "PG" : "f9ff00",
  "PG-13" : "#ff9000",
  "R" : "#ff0000"
};

d3.select("#quotes")
    .style("list-style", "none")
=======

d3.select("#quotes")
  .style("list-style", "none")
>>>>>>> d5b7f8ea46025d8f0d6dd208810d8c8ece71db8d
  .selectAll("li")
  .data(quotes)
  .enter()
  .append("li")
<<<<<<< HEAD
    .text( d => 
       '"' + d.quote + '" - ' + d.movie + ' ( ' + d.year + ')'
    )
    .style("margin", "20px")
    .style("padding", "20px")
    .style("font-size", d => 
      d.quote.length < 25 ? "2em" : "1em"
    )
    .style("background-color", d => colors[d.rating])
    .style("border-radius", "8px");

=======
    .text(function (d) {
      return d.quote;
    });
>>>>>>> d5b7f8ea46025d8f0d6dd208810d8c8ece71db8d
