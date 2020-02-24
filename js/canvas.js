var scene  = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100;
var myCanvas = document.getElementById('threeCanvas');
var renderer = new THREE.WebGLRenderer({antialias: true,
										canvas: myCanvas});
renderer.setSize(window.innerWidth, window.innerHeight);

function makeIcosahedron(size) {

	var geometry = new THREE.IcosahedronGeometry(size, 0);
	var material = new THREE.MeshNormalMaterial();
	var icosahedron = new THREE.Mesh(geometry, material);
	return icosahedron;

}

function makeLight(color, intensity, x, y, z) {

	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(x, y, z);
	light.lookAt(0,0,0);
	return light;

}


var icos1 = makeIcosahedron(10);
scene.add(icos1);
scene.add(makeLight(0xffffff, 1, -1, 2, 4));
angularVelocity = 0.1;
theta = 0;
radius = 2;

function animate() {

	requestAnimationFrame(animate);
	icos1.rotation.x += 0.01;
	icos1.rotation.y += 0.01;
	icos1.rotation.z += 0.01;
	theta += angularVelocity;
	icos1.position.x = radius * Math.cos(theta);
	icos1.position.y = radius * Math.sin(theta);
	renderer.render(scene, camera);

}

animate(icos1);
