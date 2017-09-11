google.load('visualization', '1', { 'packages': ['map'] });
google.setOnLoadCallback(drawMap);
function drawMap() {
    var location = google.visualization.arrayToDataTable([
        ['Lat', 'Long', 'Name'],
        [42.273710, -122.815390, "Geno's Mexican Restaurant"]
    ]);

    var options = {
        zoomLevel: 17,
        showTip: true,
        useMapTypeControl: true,
        maps: {
            // Your custom mapTypeId holding custom map styles.
            styledMap: {
                name: 'Styled Map', // This name will be displayed in the map type control.
                styles: [
                    {featureType: 'poi.attraction',
                        stylers: [{color: '#fce8b2'}]
                    },
                    {featureType: 'road.highway',
                        stylers: [{hue: '#0277bd'}, {saturation: -50}]
                    },
                    {featureType: 'road.highway',
                        elementType: 'labels.icon',
                        stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
                    },
                    {featureType: 'landscape',
                        stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
                    }
                ]}}
    };

    var map = new google.visualization.Map(document.getElementById('map_div'));
    map.draw(location, options);
}

$(function(){
$('.trial h3').css('cursor','pointer');
$('.trial > p').hide();
$('.trial h3').click(function(){
	$(this).next().animate({
		height: 'toggle'
	}, 2000, 'easeOutBounce');
});






});
