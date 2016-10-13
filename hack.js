var map;
function init() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(37.790234970864, -122.39031314844),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });




}



function AppViewModel() {
  var self = this;

  self.locs = ko.observableArray([
    { name: 'A', location: "10,20"},
  ]);

  self.responseBtn = function() {  
    self.locs.unshift({ name: "B", location: "guest.png"});

    var myLatLng = {lat: 37.790234970864, lng: -122.39031314844};
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello Wafaforld!'
    });

    marker.addListener('click', function() {
      map.setZoom(14);
      map.setCenter(marker.getPosition());
      infowindow.open(map, marker);
    });


    var circle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.5,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.15,
      map: map,
      radius: 3000 // 3 km
    });
    circle.setEditable(true);
    circle.bindTo('center', marker, 'position');

    var contentString = '<div id="content">' + '<h4>Title</h4>' + '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });


  }; 
}