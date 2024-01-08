var wms_layers = [];

var lyr_CartesIGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/private/wms-r?VERSION%3D1.3.0%26apikey%3Dign_scan_ws",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.MAPS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cartes IGN",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CartesIGN_0, 0]);
var format_Maillage_Effort__1 = new ol.format.GeoJSON();
var features_Maillage_Effort__1 = format_Maillage_Effort__1.readFeatures(json_Maillage_Effort__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maillage_Effort__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maillage_Effort__1.addFeatures(features_Maillage_Effort__1);
var lyr_Maillage_Effort__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maillage_Effort__1, 
                style: style_Maillage_Effort__1,
                interactive: true,
                title: '<img src="styles/legend/Maillage_Effort__1.png" /> Maillage_Effort_-'
            });

lyr_CartesIGN_0.setVisible(true);lyr_Maillage_Effort__1.setVisible(true);
var layersList = [lyr_CartesIGN_0,lyr_Maillage_Effort__1];
lyr_Maillage_Effort__1.set('fieldAliases', {'CODE_10KM': 'CODE_10KM', 'Nb_Indices': 'Nb_Indices', });
lyr_Maillage_Effort__1.set('fieldImages', {'CODE_10KM': '', 'Nb_Indices': '', });
lyr_Maillage_Effort__1.set('fieldLabels', {'CODE_10KM': 'no label', 'Nb_Indices': 'no label', });
lyr_Maillage_Effort__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});