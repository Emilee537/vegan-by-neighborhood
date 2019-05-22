
////// MAPBOX ////////////////////////////////////////

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbGVlNTM3IiwiYSI6ImNqdnB5ODU4djJlaWY0M3FvMmN6cWFkNXMifQ.2CMwBgHk7i0Od2GcX6nAdw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/emilee537/cjvvm365d4bqz1cs2hmn1gxdt'
});
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['vegan-restaurants'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});


////////// RESPONSIVE ///////////

$(function () {
  $('#mobile-menu-button').click(function () {
    if ($('nav').hasClass('showing')) {
      $('nav').removeClass('showing').addClass('hiding')
    } else {
      $('nav').removeClass('hiding').addClass('showing')
    }
  })
})
