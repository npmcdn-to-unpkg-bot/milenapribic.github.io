console.log('hey mimi');

// $('.grid').masonry({
//   columnWidth: 200,
//   itemSelector: '.grid-item'
// });

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  
