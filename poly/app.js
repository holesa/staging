const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.y = 10;
camera.position.z = 60;

// // Model - plane
const loader1 = new THREE.GLTFLoader();
const scene1 = new THREE.Scene();
const renderer1 = new THREE.WebGLRenderer({ antialias: true });

const lightA1 = new THREE.AmbientLight(0xced0de); // soft white light
scene1.add(lightA1);

const lightP1 = new THREE.PointLight(0xdae5e8, 0.5);
lightP1.position.set(-10, 30, 700);
scene1.add(lightP1);

renderer1.setSize(window.innerWidth, window.innerHeight);
renderer1.setClearColor(0xdfe4e8, 1.07);
document.getElementById("castle").appendChild(renderer1.domElement);

loader1.load(
  "https://holesa.github.io/staging/poly/models/castle/castle.gltf",
  function (glb) {
    glb.scene.scale.set(0.38, 0.38, 0.38);
    glb.scene.rotateX(100.7);
    glb.scene.rotateY(0.2);
    scene1.add(glb.scene);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened");
  }
);

const animate1 = function () {
  requestAnimationFrame(animate1);
  renderer1.setPixelRatio(window.devicePixelRatio);
  renderer1.render(scene1, camera);
};

animate1();

// Model - mountains
const loader2 = new THREE.GLTFLoader();
const scene2 = new THREE.Scene();
const renderer2 = new THREE.WebGLRenderer({ antialias: true });
renderer2.setSize(window.innerWidth, window.innerHeight);
renderer2.setClearColor(0xffffff, 1);
document.getElementById("mountain").appendChild(renderer2.domElement);

loader2.load(
  "https://holesa.github.io/staging/poly/models/mountains.glb",
  function (glb) {
    glb.scene.scale.set(0.01, 0.01, 0.01);
    glb.scene.rotateX(101);
    glb.scene.rotateY(0.2);
    scene2.add(glb.scene);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened");
  }
);

const lightA2 = new THREE.AmbientLight(0x404040); // soft white light
scene1.add(lightA2);

const lightP2 = new THREE.PointLight(0x557bc9, 1);
lightP2.position.set(-10, 30, 500);

scene2.add(lightA2);

scene2.add(lightP2);

var mouseTolerance = 0.3;

 document.onmousemove = function (e) {
   var centerX = window.innerWidth * 0.4;
  var centerY = window.innerHeight * 0.4;

   //scene.rotation.y = ((e.clientX - centerX) / centerX) * mouseTolerance;
   scene2.rotation.x = ((e.clientY - centerY) / centerY) * mouseTolerance;
 };

const animate2 = function () {
  requestAnimationFrame(animate2);
  renderer2.setPixelRatio(window.devicePixelRatio);
  renderer2.render(scene2, camera);
};

animate2();
