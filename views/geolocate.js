var isGeolocateSupported = function()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(() => {
            var locationDiv = document.getElementById("user-location");
            locationDiv.innerHTML = "Latitude: "    +  position.coords.latitude + "</br>"
                                    +"Longitude: "  +   position.coords.longitude;
        });
    }
    else{
        console.log(`no geolocation api supported`);
    }
}