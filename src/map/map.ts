interface Mappable {
  location: {
    lat: number
    lng: number
  }
}

class Map {
  private map: google.maps.Map

  constructor() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    })
  }

  addMarker(mappable: Mappable) {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })
  }
}

export default Map
