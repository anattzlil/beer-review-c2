var beers = [];
var addBeer = function (name, catagory, rate) {
    var newBeer = {
        beerName: name,
        beerCatagory: catagory,
        rating: rate
    }
    beers.push(newBeer);
    console.log(beers);
};

$('.post-beer').on('click', function(){
    var beerName = $('.beer-input').val();
    var catagoryName = $('.category-input').val();
    var beerRate = $('.rating-input').val();
    addBeer(beerName, catagoryName, beerRate);
    renderBeers();
});

var renderBeers = function(){
    $('.beers-list').find('li').remove();
    for(var i = 0; i < beers.length; i++){
        $('.beers-list').append('<li>Beer name: ' + beers[i].beerName + ' Catagory: ' + beers[i].beerCatagory + ' Rating: ' + beers[i].rating + '/5');
    }
};
var clicked = false;
$('.sort-beer').on('click', function(){
    if (!clicked){
        beers.sort(function(a, b) { 
            return a.rating - b.rating;
        });
        renderBeers();
        $('.sort-beer').html('reverse');
        clicked = true;
    } else {
        beers.sort(function(a, b) { 
            return b.rating - a.rating;
        });
        renderBeers();
        $('.sort-beer').html('sort');
        clicked = false;
    }
    
});
