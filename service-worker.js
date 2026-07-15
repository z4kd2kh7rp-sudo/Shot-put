const CACHE = "shotput-app-v1";


const files = [

"./",

"./index.html",

"./style.css",

"./app.js",

"./workouts.js",

"./calendar.js",

"./charts.js",

"./goals.js",

"./manifest.json"

];


self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(CACHE)

.then(cache=>{

return cache.addAll(files);

})

);

});



self.addEventListener(
"fetch",
event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});
