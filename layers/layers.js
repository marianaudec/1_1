var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Exel_proyecto1casa_maru_exel_2 = new ol.format.GeoJSON();
var features_Exel_proyecto1casa_maru_exel_2 = format_Exel_proyecto1casa_maru_exel_2.readFeatures(json_Exel_proyecto1casa_maru_exel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exel_proyecto1casa_maru_exel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exel_proyecto1casa_maru_exel_2.addFeatures(features_Exel_proyecto1casa_maru_exel_2);
cluster_Exel_proyecto1casa_maru_exel_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Exel_proyecto1casa_maru_exel_2
});
var lyr_Exel_proyecto1casa_maru_exel_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Exel_proyecto1casa_maru_exel_2, 
                style: style_Exel_proyecto1casa_maru_exel_2,
                popuplayertitle: 'Exel_proyecto1 — casa_maru_exel',
                interactive: true,
                title: '<img src="styles/legend/Exel_proyecto1casa_maru_exel_2.png" /> Exel_proyecto1 — casa_maru_exel'
            });
var format_Casakmz_3 = new ol.format.GeoJSON();
var features_Casakmz_3 = format_Casakmz_3.readFeatures(json_Casakmz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casakmz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casakmz_3.addFeatures(features_Casakmz_3);
var lyr_Casakmz_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casakmz_3, 
                style: style_Casakmz_3,
                popuplayertitle: 'Casa.kmz',
                interactive: true,
                title: 'Casa.kmz'
            });
var format_Casa_maru_4 = new ol.format.GeoJSON();
var features_Casa_maru_4 = format_Casa_maru_4.readFeatures(json_Casa_maru_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casa_maru_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa_maru_4.addFeatures(features_Casa_maru_4);
cluster_Casa_maru_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Casa_maru_4
});
var lyr_Casa_maru_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Casa_maru_4, 
                style: style_Casa_maru_4,
                popuplayertitle: 'Casa_maru',
                interactive: true,
                title: '<img src="styles/legend/Casa_maru_4.png" /> Casa_maru'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Exel_proyecto1casa_maru_exel_2.setVisible(true);lyr_Casakmz_3.setVisible(true);lyr_Casa_maru_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Exel_proyecto1casa_maru_exel_2,lyr_Casakmz_3,lyr_Casa_maru_4];
lyr_Exel_proyecto1casa_maru_exel_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'P_correcta': 'P_correcta', 'P_error': 'P_error', 'P_erradas': 'P_erradas', 'Porc_total': 'Porc_total', 'Porc_error': 'Porc_error', 'Porc_corre': 'Porc_corre', 'Id_estudio': 'Id_estudio', 'Video': 'Video', });
lyr_Casakmz_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Casa_maru_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'P_correcta': 'P_correcta', 'P_error': 'P_error', 'P_erradas': 'P_erradas', 'Porc_total': 'Porc_total', 'Porc_error': 'Porc_error', 'Porc_corre': 'Porc_corre', 'Id_estudio': 'Id_estudio', 'Video': 'Video', });
lyr_Exel_proyecto1casa_maru_exel_2.set('fieldImages', {'id': '', 'Name': '', 'T_pregunt': '', 'P_correcta': '', 'P_error': '', 'P_erradas': '', 'Porc_total': '', 'Porc_error': '', 'Porc_corre': '', 'Id_estudio': '', 'Video': '', });
lyr_Casakmz_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Casa_maru_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunt': 'TextEdit', 'P_correcta': 'TextEdit', 'P_error': 'TextEdit', 'P_erradas': 'TextEdit', 'Porc_total': 'TextEdit', 'Porc_error': 'TextEdit', 'Porc_corre': 'TextEdit', 'Id_estudio': 'TextEdit', 'Video': 'TextEdit', });
lyr_Exel_proyecto1casa_maru_exel_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'T_pregunt': 'no label', 'P_correcta': 'no label', 'P_error': 'no label', 'P_erradas': 'no label', 'Porc_total': 'no label', 'Porc_error': 'no label', 'Porc_corre': 'no label', 'Id_estudio': 'no label', 'Video': 'no label', });
lyr_Casakmz_3.set('fieldLabels', {'id': 'header label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'hidden field', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'hidden field', 'icon': 'no label', });
lyr_Casa_maru_4.set('fieldLabels', {'id': 'no label', 'Name': 'header label - always visible', 'T_pregunt': 'inline label - always visible', 'P_correcta': 'header label - visible with data', 'P_error': 'header label - always visible', 'P_erradas': 'header label - visible with data', 'Porc_total': 'inline label - always visible', 'Porc_error': 'no label', 'Porc_corre': 'inline label - always visible', 'Id_estudio': 'hidden field', 'Video': 'no label', });
lyr_Casa_maru_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});