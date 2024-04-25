var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_VNMbnranhgiiVNM_adm2shp_1 = new ol.format.GeoJSON();
var features_VNMbnranhgiiVNM_adm2shp_1 = format_VNMbnranhgiiVNM_adm2shp_1.readFeatures(json_VNMbnranhgiiVNM_adm2shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VNMbnranhgiiVNM_adm2shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VNMbnranhgiiVNM_adm2shp_1.addFeatures(features_VNMbnranhgiiVNM_adm2shp_1);
var lyr_VNMbnranhgiiVNM_adm2shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VNMbnranhgiiVNM_adm2shp_1, 
                style: style_VNMbnranhgiiVNM_adm2shp_1,
                popuplayertitle: "VNM bản đồ ranh giới — VNM_adm2.shp",
                interactive: true,
    title: 'VNM bản đồ ranh giới — VNM_adm2.shp<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_0.png" /> Bình Minh<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_1.png" /> Bình Tân<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_2.png" /> Long Hồ<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_3.png" /> Mang Thít<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_4.png" /> Tam Bình<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_5.png" /> Trà Ôn<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_6.png" /> Vĩnh Long<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_7.png" /> Vũng Liêm<br />\
    <img src="styles/legend/VNMbnranhgiiVNM_adm2shp_1_8.png" /> <br />'
        });
var format_UBNDvinhlong_2 = new ol.format.GeoJSON();
var features_UBNDvinhlong_2 = format_UBNDvinhlong_2.readFeatures(json_UBNDvinhlong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBNDvinhlong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBNDvinhlong_2.addFeatures(features_UBNDvinhlong_2);
var lyr_UBNDvinhlong_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBNDvinhlong_2, 
                style: style_UBNDvinhlong_2,
                popuplayertitle: "UBND vinh long",
                interactive: true,
                title: '<img src="styles/legend/UBNDvinhlong_2.png" /> UBND vinh long'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_VNMbnranhgiiVNM_adm2shp_1.setVisible(true);lyr_UBNDvinhlong_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_VNMbnranhgiiVNM_adm2shp_1,lyr_UBNDvinhlong_2];
lyr_VNMbnranhgiiVNM_adm2shp_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_UBNDvinhlong_2.set('fieldAliases', {'id': 'id', 'UBND vinh': 'UBND vinh', });
lyr_VNMbnranhgiiVNM_adm2shp_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_UBNDvinhlong_2.set('fieldImages', {'id': 'TextEdit', 'UBND vinh': 'TextEdit', });
lyr_VNMbnranhgiiVNM_adm2shp_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_UBNDvinhlong_2.set('fieldLabels', {'id': 'no label', 'UBND vinh': 'no label', });
lyr_UBNDvinhlong_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});