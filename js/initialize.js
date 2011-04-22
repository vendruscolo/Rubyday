function initialize() {
	var myLatlng = new google.maps.LatLng(45.51571, 9.21143);
	var myOptions = {
		zoom: 14,
		center: myLatlng,
		navigationControl: true,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeControl: false,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	
	var image = new google.maps.MarkerImage('images/ruby_small.png');
	
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: image
	});
}