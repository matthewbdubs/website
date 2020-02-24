function setup() {

	var scene  = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 100;
	var myCanvas = document.getElementById('threeCanvas');
	var renderer = new THREE.WebGLRenderer({antialias: true,
											canvas: myCanvas});
	renderer.setSize(window.innerWidth, window.innerHeight);

}

function makeIcosahedron(size, position) {

	var geometry = new THREE.IcosahedronGeometry(size, 0);
	var material = new THREE.MeshNormalMaterial();
	var icosahedron = new THREE.Mesh(geometry, material);
	icosahedron.position.set(position);
	scene.add(icosahedron);

}

function makeLight(color, intensity, position) {

	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(position);
	light.lookAt(0,0,0);
	scene.add(light);

}

function animate() {

	requestAnimationFrame(animate);
	icosahedron.rotation.x += 0.01;
	icosahedron.rotation.y += 0.01;
	renderer.render(scene, camera);

}

setup();
makeIcosahedron();
makeLight(0xffffff, 1);
animate();
