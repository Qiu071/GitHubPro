$(function(){
	var map = new BMap.Map("mx_position");
	var point = new BMap.Point(114.228242, 30.605721);
	map.centerAndZoom(point,17);
	var marker = new BMap.Marker(point); 
	map.addOverlay(marker);
	map.addControl(new BMap.NavigationControl());
	map.addControl(new BMap.ScaleControl());
	map.addControl(new BMap.OverviewMapControl());
	map.addControl(new BMap.MapTypeControl());
	map.enableScrollWheelZoom(true); 
	marker.addEventListener("click",getAttr);
	var label = new BMap.Label("木兮地板湖北营销中心",{offset:new BMap.Size(20,-10)});
	marker.setLabel(label);

	function getAttr(){
	    alert("木兮地板湖北营销中心");
	}
})