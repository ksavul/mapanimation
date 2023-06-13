// Please add your MAPBOX token.  See Readme for details on how to get a token.
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-3.1883, 55.9533],
      zoom: 6
  });

  var marker = new mapboxgl.Marker()
    .setLngLat([-3.1883, 55.9533])
    .addTo(map);

    const busStops = [
    [-3.1883, 55.9533],    // Edinburgh
    [-3.7374, 56.7028],    // Pitlochry
    [-3.1303, 57.4388],    // Dufftown
    [-4.2247, 57.4778],    // Inverness
    [-6.1865, 57.4135],    // Portree
    [-6.3549, 57.5836],    // Uig
    [-5.1024, 56.6826],    // Glencoe
    [-3.7333, 56.7167],    // Gleneagle
    [-3.1883, 55.9533]     // Edinburgh
];

let counter = 0;
function move(){
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000); 
}

