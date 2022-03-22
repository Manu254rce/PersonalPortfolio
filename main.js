import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(71, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusKnotGeometry( 7, 2, 500)
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube)

const pointlight = new THREE.PointLight(0xff3333);
pointlight.position.set(20, 15, 20)

const pointlight2 = new THREE.PointLight(0x030452);
pointlight2.position.set(-15, -1, 5)

const ambientLight = new THREE.AmbientLight(0x030452);

scene.add(pointlight, pointlight2, ambientLight)

//function moveCamera()
//{
  //const t = document.body.getBoundingClientRect().top;

  //camera.position.y += -0.02;
//}

//document.body.onscroll = moveCamera;

//moveCamera();



function animate() 
{
  requestAnimationFrame(animate);
  renderer.render( scene, camera );

  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;

}
animate()

