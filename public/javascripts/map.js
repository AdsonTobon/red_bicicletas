var map= L.map('main_map').setView([6.217, -75.567], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    
}).addTo(map);

//'https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png'
// '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'