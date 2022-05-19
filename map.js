const Background = new ol.layer.Tile({
  source: new ol.source.OSM()
})

const Buildings = new ol.layer.Vector({
  source: new ol.source.Vector({  
    url: './data/buildings.kml',
    format: new ol.format.KML()
  }),
  visible: true
})

const Paths = new ol.layer.Vector({
  source: new ol.source.Vector({  
    url: './data/paths.kml',
    format: new ol.format.KML()
  }),
  visible: true
})

var map = new ol.Map({
    target: 'map',
    layers: [
      Background,
      Buildings,
      Paths
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([30.39, 59.92]),
      proj: 'EPSG:3395',
      zoom: 13
    })
  });