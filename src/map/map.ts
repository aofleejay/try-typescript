class Map {
  private map: google.maps.Map

  constructor() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    })
  }
}

export default Map
