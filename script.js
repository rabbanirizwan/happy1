 
 
 var map;
var service;
var infowindow;
var latitude,longitude;

var tab;


function near(){
document.getElementById("places").innerHTML="";

var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);



  tab =1;
  
}
function fav(){
  document.getElementById("places").innerHTML="";
var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  tab=2;
  //console.log("call hua"+tab);
  
} 


function food1() {
    document.getElementById("places").innerHTML = " ";

//console.log(localStorage.getItem("lastname"));
var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
     console.log("chla1");
      document.querySelector(".second-nav #one a").style.color="orange";
      document.querySelector(".second-nav #one").style.borderBottom = "1px solid orange";
       document.querySelector(".second-nav #two a").style.color="black";
       document.querySelector(".second-nav #three a").style.color="black";
       document.querySelector(".second-nav #four a").style.color="black";
       document.querySelector(".second-nav #five a").style.color="black";
       document.querySelector(".second-nav #six a").style.color="black";
    
       document.querySelector(".second-nav #two").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #three").style.borderBottom = "1px solid black";
    document.querySelector(".second-nav #four").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #five").style.borderBottom = "1px solid black";
  
    document.querySelector(".second-nav #six").style.borderBottom = "1px solid black";
    //console.log(window.parameter);
  
}

function food2() {
   // document.getElementById("places").innerHTML = "";
console.log(Number(localStorage.getItem("latitude")));

    var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['bar']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    
    console.log("chla2");
     document.querySelector(".second-nav #one a").style.color="black";
    document.querySelector(".second-nav #two a").style.color="orange";
    document.querySelector(".second-nav #two").style.borderBottom = "1px solid orange";
    document.querySelector(".second-nav #one").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #three").style.borderBottom = "1px solid black";
    document.querySelector(".second-nav #four").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #five").style.borderBottom = "1px solid black";
  
    document.querySelector(".second-nav #six").style.borderBottom = "1px solid black";
     
    
    document.querySelector(".second-nav #three a").style.color="black";
     document.querySelector(".second-nav #four a").style.color="black";
     document.querySelector(".second-nav #five a").style.color="black";
     document.querySelector(".second-nav #six a").style.color="black";
}

function food3() {

//     document.getElementById("places").innerHTML = " ";

//     var pyrmont = new google.maps.LatLng(localStorage.getItem("latitude"),localStorage.getItem("longitude"));

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });



//   var request = {
//     location: pyrmont,
//     radius: '500',
//     type: ['mosque']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
    
    console.log("chla3");
    document.querySelector(".second-nav #one a").style.color="black";
    document.querySelector(".second-nav #two a").style.color="black";
    document.querySelector(".second-nav #three a").style.color="orange";

    document.querySelector(".second-nav #three").style.borderBottom = "1px solid orange";
    document.querySelector(".second-nav #two").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #one").style.borderBottom = "1px solid black";
    document.querySelector(".second-nav #four").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #five").style.borderBottom = "1px solid black";
  
    document.querySelector(".second-nav #six").style.borderBottom = "1px solid black";
    

    document.querySelector(".second-nav #four a").style.color="black";
    document.querySelector(".second-nav #five a").style.color="black";
    document.querySelector(".second-nav #six a").style.color="black";    
return 2;
}
function food4() {

    document.getElementById("places").innerHTML = " ";

    var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['beauty_salon']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    
    console.log("chla4");
    document.querySelector(".second-nav #one a").style.color="black";
    document.querySelector(".second-nav #two a").style.color="black";
    document.querySelector(".second-nav #three a").style.color="black";
    document.querySelector(".second-nav #four a").style.color="orange";
    document.querySelector(".second-nav #four").style.borderBottom = "1px solid orange";
    document.querySelector(".second-nav #five a").style.color="black";
    document.querySelector(".second-nav #six a").style.color="black";
    document.querySelector(".second-nav #one").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #two").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #three").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #five").style.borderBottom = "1px solid black";
  
    document.querySelector(".second-nav #six").style.borderBottom = "1px solid black";
    
}
function food5() {

    document.getElementById("places").innerHTML = " ";

    var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['shopping_mall']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    
    console.log("chla5");
    document.querySelector(".second-nav #one").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #two").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #three").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #four").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #one a").style.color="black";
    document.querySelector(".second-nav #two a").style.color="black";
    document.querySelector(".second-nav #three a").style.color="black";
    document.querySelector(".second-nav #four a").style.color="black";
    document.querySelector(".second-nav #five a").style.color="orange";
    document.querySelector(".second-nav #five").style.borderBottom = "1px solid orange";
    document.querySelector(".second-nav #six").style.borderBottom = "1px solid black";
    document.querySelector(".second-nav #six a").style.color="black";
   
}

function food6() {
 document.getElementById("places").innerHTML = " ";

    var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '500',
    type: ['mosque']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    

    console.log("chla6");
    document.querySelector(".second-nav #one a").style.color="black";
    document.querySelector(".second-nav #two a").style.color="black";
    document.querySelector(".second-nav #three a").style.color="black";
    document.querySelector(".second-nav #four a").style.color="black";
    document.querySelector(".second-nav #five a").style.color="black";
    document.querySelector(".second-nav #six a").style.color="orange";
    document.querySelector(".second-nav #six").style.borderBottom = "1px solid orange";
    document.querySelector(".second-nav #two").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #three").style.borderBottom = "1px solid black";
    document.querySelector(".second-nav #four").style.borderBottom = "1px solid black";
    
    document.querySelector(".second-nav #five").style.borderBottom = "1px solid black";
  
    document.querySelector(".second-nav #one").style.borderBottom = "1px solid black";
       
}
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      
      createMarker(results[i]);
     // createPhoto(place);
    }
  }
}
function createMarker(place) {
  var photos = place.photos;
  var i=0;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
        //console.log(place.name);
        //console.log(place);
  if (!photos) {
     return;
  }

    //   document.getElementById("places").innerHTML = "";
        document.getElementById("places").innerHTML+=  `<div class="first-place">
        <div style = "background-image:url(${photos[i].getUrl()});" id="first-place-img"></div>
        <div class="inner-style">
            <p class="foodway"> ${place.name} <br><small>${place.rating}</small></p>
            <div class="inner-style1">
                  <p><i class="fas fa-map-marker-alt"></i>
                      ${place.vicinity}</p>
                  <p style="color:#ed8707; padding-left: 27px;">Next deal 3pm to 7pm </p>
            </div>
          
            </div>
          </div>
        
        `;
        
      }

