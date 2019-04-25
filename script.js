
 
//  var map;
// var service;
// var infowindow;
// var latitude,longitude;

var tab;

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("places");
    li = ul.getElementsByTagName("p");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function locations()
{
  tab=7;
  document.getElementById("places").innerHTML="";
document.getElementById("map").style.display ="none";

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
  if(window.latitude >= 0)
{
   console.log("window"+window.latitude);
   document.querySelector(".newone > p").style.color="black";
   document.querySelector(".newone").style.color="black";
   document.querySelector(".new4 > p").style.color="#f38400";
   document.querySelector(".new4").style.color="#f38400";
   document.querySelector(".new3 > p").style.color="black";
   document.querySelector(".new3").style.color="black";
   document.querySelector(".new2 > p").style.color="black";
   document.querySelector(".new2").style.color="black";
   document.querySelector(".new5 > p").style.color="black";
   document.querySelector(".new5").style.color="black";
   
   
   
   // document.querySelector(".fa-plus > p").style.color="red";

}


}
function ShowAll(){
  console.log("show");
document.getElementById("places").innerHTML="";
document.getElementById("map").style.display ="none";
console.log("lat"+window.latitude);
var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

if(document.querySelector("#gridCheck1").checked == true)
{
  console.log("chec1");
var request = {
    location: pyrmont,
    radius: '1000',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  
}
if(document.querySelector("#gridCheck2").checked == true)
{

  console.log("chec2");
  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['bar']
  };

service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  
}

if(document.querySelector("#gridCheck3").checked == true)
{

  console.log("chec2");
  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['']
  };

service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  
}

  
  if(document.querySelector("#gridCheck4").checked == true)
{

  console.log("chec2");
  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['store']
  };

service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  
}

  
  if(document.querySelector("#gridCheck5").checked == true)
{

  console.log("chec2");
  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['amusement_park']
  };

service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  
}

  
  if(document.querySelector("#gridCheck6").checked == true)
{

  console.log("chec2");
  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['beauty_salon']
  };

service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  
}

  

  

  tab =9;
 
 
}

function near(){
document.getElementById("places").innerHTML="";
document.getElementById("map").style.display ="none";

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
if(window.latitude >= 0)
{
   console.log("window"+window.latitude);
   document.querySelector(".newone > p").style.color="#f38400";
   document.querySelector(".newone").style.color="#f38400";
   document.querySelector(".new2 > p").style.color="black";
   document.querySelector(".new2").style.color="black";
   document.querySelector(".new3 > p").style.color="black";
   document.querySelector(".new3").style.color="black";
   document.querySelector(".new4 > p").style.color="black";
   document.querySelector(".new4").style.color="black";
   document.querySelector(".new5 > p").style.color="black";
   document.querySelector(".new5").style.color="black";
   
   
   
   // document.querySelector(".fa-plus > p").style.color="red";

}
   
}
function fav(){
  document.getElementById("places").innerHTML=" ";
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

  if(window.latitude >= 0)
{
   console.log("window"+window.latitude);
   document.querySelector(".newone > p").style.color="black";
   document.querySelector(".newone").style.color="black";
   document.querySelector(".new2 > p").style.color="black";
   document.querySelector(".new2").style.color="black";
   document.querySelector(".new3 > p").style.color="black";
   document.querySelector(".new3").style.color="black";
   document.querySelector(".new4 > p").style.color="black";
   document.querySelector(".new4").style.color="black";
   document.querySelector(".new5 > p").style.color="#f38400";
   document.querySelector(".new5").style.color="#f38400";
   
   
   
   // document.querySelector(".fa-plus > p").style.color="red";

}
  
} 

function mapShow(){
document.getElementById("places").innerHTML=" ";

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



  tab =3;
  

   if(window.latitude >= 0)
{
   console.log("window"+window.latitude);
   document.querySelector(".newone > p").style.color="black";
   document.querySelector(".newone").style.color="black";
   document.querySelector(".new2 > p").style.color="#f38400";
   document.querySelector(".new2").style.color="#f38400";
   document.querySelector(".new3 > p").style.color="black";
   document.querySelector(".new3").style.color="black";
   document.querySelector(".new4 > p").style.color="black";
   document.querySelector(".new4").style.color="black";
   document.querySelector(".new5 > p").style.color="black";
   document.querySelector(".new5").style.color="black";
   
   
   
   // document.querySelector(".fa-plus > p").style.color="red";

}
  
}

function joe(){
document.getElementById("places").innerHTML=" ";
var i=0;
daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //console.log(tab);
  //console.log("new"+place.geometry.location.lat());
var dt = new Date("December 25, 1995 23:15:00");
 dt.getDay();
var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '5000',
    type: ['neighborhood']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);



  tab =4;
  console.log("call");
  document.querySelector("#inputGroupSelect01").value=`${daysInWeek[i]}`;
for(i;i<6;i++)
{
   document.querySelector("#inputGroupSelect01").innerHTML+=`<option value=${daysInWeek[i]}>${daysInWeek[i]}</option>`;
 
}
 
 if(window.latitude >= 0)
{
   console.log("window"+window.latitude);
   document.querySelector(".newone > p").style.color="black";
   document.querySelector(".newone").style.color="black";
   document.querySelector(".new3 > p").style.color="#f38400";
   document.querySelector(".new3").style.color="#f38400";
   document.querySelector(".new2 > p").style.color="black";
   document.querySelector(".new2").style.color="black";
   document.querySelector(".new4 > p").style.color="black";
   document.querySelector(".new4").style.color="black";
   document.querySelector(".new5 > p").style.color="black";
   document.querySelector(".new5").style.color="black";
   
   
   
   // document.querySelector(".fa-plus > p").style.color="red";

}

  
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
    document.getElementById("places").innerHTML = "";
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
console.log("food3");
   document.getElementById("places").innerHTML = "";
console.log(Number(localStorage.getItem("latitude")));

    var pyrmont = new google.maps.LatLng(window.latitude,window.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });



  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['park']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    
  var request = {
    location: pyrmont,
    radius: '1000',
    type: ['rv_park']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    
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
    type: ['subway_station']
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
            <p class="foodway" style="max-width:150px;"> ${place.name} <br><small>${place.rating}</small></p>
            <div class="inner-style1">
                  <p><i class="fas fa-map-marker-alt"></i>
                      ${place.vicinity}</p>
                  <p style="color:#ed8707; padding-left: 27px;"></p>
            </div>
          
            </div>
          </div>
        
        `;
        
      }

