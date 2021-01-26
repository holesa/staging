const loader = new THREE.GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.getElementById("mountain").appendChild(renderer.domElement);

camera.position.y = 10;
camera.position.z = 60;

loader.load(
  "https://holesa.github.io/staging.github.io/poly/models/mountains.glb",
  function (glb) {
    glb.scene.scale.set(0.01, 0.01, 0.01);
    glb.scene.rotateX(101);
    glb.scene.rotateY(0.2);
    scene.add(glb.scene);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened");
  }
);

const lightA = new THREE.AmbientLight(0x404040); // soft white light
scene.add(lightA);

const lightP = new THREE.PointLight(0x557bc9, 1);
lightP.position.set(-10, 30, 500);
scene.add(lightP);

var mouseTolerance = 0.3;

document.onmousemove = function (e) {
  var centerX = window.innerWidth * 0.4;
  var centerY = window.innerHeight * 0.4;

  //scene.rotation.y = ((e.clientX - centerX) / centerX) * mouseTolerance;
  scene.rotation.x = ((e.clientY - centerY) / centerY) * mouseTolerance;
};

const animate = function () {
  requestAnimationFrame(animate);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
};

animate();
