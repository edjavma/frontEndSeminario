appIngresos.service('Map', function($q) {
    
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(14.524394, -90.761441),
            zoom: 18,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
        this.marker = new google.maps.Marker({
            position: {lat: 14.524394, lng: -90.761441},
            map: this.map
          });
    }
    
});