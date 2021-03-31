
window.onload = () => {

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(staticLoadPlaces);
    } else { 
        console.log('Geolocation API not supported by this browser.');
          }
                
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = 'C';

    // let places = staticLoadPlaces();
    // renderPlaces(places);
};

function staticLoadPlaces(position) {
    renderPlaces(position.coords.latitude, position.coords.longitude);
    // lng1 = position.coords.latitude;
    // lng2=position.coords.longitude;
    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    //  ctx.font = "30px Arial";
    //  ctx.fillText(lng1,10,50);
    //  ctx.fillText(lng2,10,80);
    return [
        {
            name: 'Pokèmon',
            location: {
                // decomment the following and add coordinates:
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            },
        },
    ];
}

var models = [
    {
        url: '../assets/Chair.glb',
        scale: '1 1 1',
        info: 'Chair',
        // rotation: '0 180 0',
    },
    {
        url: './articuno/scene.gltf',
        scale: '0.2 0.2 0.2',
        // rotation: '0 180 0',
        info: 'Articuno, Lv. 80, HP 100/100',
    },
    {
        url: '../assets/asset.glb',
        scale: '0.08 0.08 0.08',
        // rotation: '0 180 0',
        info: 'Dragonite, Lv. 99, HP 150/150',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(latitude, longitude) {
    let scene = document.querySelector('a-scene');

    // places.forEach((place) => {
    //     let latitude = place.location.lat;
    //     let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        gesture-handler
        setModel(models[modelIndex], model);
        lng1 = latitude;
        lng2 = longitude;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText(lng1,10,50);
        ctx.fillText(lng2,10,80);

        // model.setAttribute('animation-mixer', '');
//for changing the models
        // document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        //     var entity = document.querySelector('[gps-entity-place]');
        //     modelIndex++;
        //     var newIndex = modelIndex % models.length;
        //     setModel(models[newIndex], entity);
        // });

        scene.appendChild(model);
    // });
}