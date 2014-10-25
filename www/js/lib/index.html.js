define(["jquery", "bootstrap", "async!http://maps.google.com/maps/api/js?sensor=false"], function(jQuery){
    return function(){
        jQuery(".carousel").carousel();
            var myOptions = {
            zoom: 14,
            center: new google.maps.LatLng(43.4531855, -80.55331509999996),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(43.4531855, -80.55331509999996)
        });
        infowindow = new google.maps.InfoWindow({
            content: "<b>Salesucation.com Inc.</b><br/>5-420 Erb St . W<br/>N2L6K6 Waterloo"
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
        jQuery("#inquiry").submit(function(){
            jQuery.ajax({
                url:"https://rich-hildred.rhcloud.com/Mailer/4953dc8bd6100c7fc61abb1",
                dataType:"json",
                data: jQuery("#inquiry").serialize()
            }).done(function(oResponse){
                jQuery("#result").html(oResponse.result);
            }).fail(function(sHtml){
                jQuery("#result").css("color", "red").html(sHtml);
            });
            return false;

        });

    };
});
