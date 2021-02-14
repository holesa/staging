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

renderer1.setSize(window.innerWidth, window.innerHeight);
renderer1.setClearColor(0xDAE5E8, 1);
document.getElementById("castle").appendChild(renderer1.domElement);

loader1.load(
  "https://holesa.github.io/staging/poly/models/castle/castle.gltf",
  function (glb) {
    glb.scene.scale.set(0.35, 0.35, 0.35);
    glb.scene.rotateX(100.8);
    glb.scene.rotateY(0.25);
    scene1.add(glb.scene);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened");
  }
);

const lightA1 = new THREE.AmbientLight(0xE3E6E9); // soft white light
scene1.add(lightA1);

const lightP1 = new THREE.PointLight(0xffffff, 0.70);
lightP1.position.set(80, 40, 80);
scene1.add(lightP1);


window.onscroll = (e) => {
  scene1.rotation.x = -this.scrollY / 1000.0;
};

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

 //window.onscroll = (e) => {
 // scene2.rotation.x = -this.scrollY / 1800.0;
//};

const animate2 = function () {
  requestAnimationFrame(animate2);
  renderer2.setPixelRatio(window.devicePixelRatio);
  renderer2.render(scene2, camera);
};

animate2();
