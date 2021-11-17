$(document).ready(function(){
    
    function imgfit(){
        var bw = $("#back").width();
        var bh = $("#back").height();
        var iw = $("#back img").get(0).width;
        var ih = $("#back img").get(0).height;
        var br = bw/bh;
        var ir = iw/ih;
        if(br > ir){
            $("#back img").width(bw).height("auto");
        }else{
            $("#back img").height(bh).width("auto");
        }
    }
    
    imgfit();
    $(window).resize(imgfit);
    
    var lat;
    var lon;
    navigator.geolocation.getCurrentPosition(function(pos){
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
        if(lat!=undefined){
            $("#city>option").eq(0).attr({     //$("#city>option").first   //$("#city>option:first-of-type")
                lat: lat,
                lon: lon
            });
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=e6ee8ea2d7131ed534209b93ca4235a2&units=metric&lang=kr",
                success: function(data){
                    alert(data.weatherdata.location.name);
                }
            });
        }
    });
    
    
});






