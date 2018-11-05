var isGeolocateSupported = function()
{

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) => {
            var locationDiv = document.getElementById("user-location");
            locationDiv.innerHTML = "Latitude: "    +  position.coords.latitude + "</br>"
                                    +"Longitude: "  +   position.coords.longitude;
        });
    }
    else{
        console.log(`no geolocation api supported`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    isGeolocateSupported();
}, false);