///created by love and passion by Akash Agarwal  
// email - myselfakashagarwal@gmail.com  


import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { Material } from 'three';

/**

// Debug
const gui = new dat.GUI()

*/

//////////creating canvas  and scene//////////////////////////////////////////////////

const canvas=document.createElement('canvas');
document.body.append(canvas);


//creating scene
const scene=new THREE.Scene()

/////////////////////////////////////////////////////////////////////////////////////



//////////objects for measurment////////////////////////////////////////////////////

const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}
const plane={
    width:window.innerWidth*0.004,
    height:window.innerWidth*0.002,
}
const cameraz={
    position:8
}

//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////texture loader///and textures///////////////////////////////////////////

const textureloader=new THREE.TextureLoader()

///////////////////loading textures for home//////////////////////////////////////////////////

const home_plane_texture=textureloader.load('/textures/landing_page.jpg')

//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////about me textures/////////////////////////////////////////////////////////

const about_texture=textureloader.load('/textures/aboutme_heading.png')
const about1_texture=textureloader.load('/textures/aboutme1.png')
const about2_texture=textureloader.load('/textures/aboutme2.png')
const about3_texture=textureloader.load('/textures/aboutme3.png')
const about4_texture=textureloader.load('/textures/aboutme4.png')

/////////////////work textures //////////////////////////////////////////////////////////////////

const work_texture=textureloader.load('/textures/work_heading.png')
const work1_texture=textureloader.load('/textures/1.jpg')
const work2_texture=textureloader.load('/textures/2.jpg')
const work3_texture=textureloader.load('/textures/3.jpg')
const work4_texture=textureloader.load('/textures/4.jpg')
const work5_texture=textureloader.load('/textures/5.jpg')
const work6_texture=textureloader.load('/textures/6.jpg')
const work7_texture=textureloader.load('/textures/7.jpg')
const work8_texture=textureloader.load('/textures/8.jpg')
const work9_texture=textureloader.load('/textures/9.jpg')
const work10_texture=textureloader.load('/textures/10.jpg')

////////////////awards textures////////////////////////////////////////////////////////////////////

const awards_texture=textureloader.load('/textures/awards_heading.png')
const awards1_texture=textureloader.load('/textures/award1.jpg')
const awards2_texture=textureloader.load('/textures/award2.jpg')
const awards3_texture=textureloader.load('/textures/award3.jpg')

////////////////services texture//////////////////////////////////////////////////////////////////

const services_texture=textureloader.load('/textures/services_heading.png')
const services1_texture=textureloader.load('/textures/services1.png')

//////////////contact texture//////////////////////////////////////////////////////////////////

const contact_texture=textureloader.load('/textures/contact_heading.png')
const contact1_texture=textureloader.load('/textures/contact1.png')

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////display content /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////




//////////////building meshes////////////////////////////////////////////////////////////////////


//////////////home plane ///////////////////////////////////////////////////////////////////////



const home_geometry=new THREE.PlaneBufferGeometry(12.80,7.54)
const home_material=new THREE.MeshStandardMaterial()
home_material.side=THREE.DoubleSide
home_material.map=home_plane_texture
const home_plane=new THREE.Mesh(
    home_geometry,
    home_material
)
scene.add(home_plane);


///////////////////////////////////////////////////////////////////////////////////////////


//////////////creating planes of about me /////////////////////////////////////////////////

const about_geometry=new THREE.PlaneBufferGeometry(15.48,8.70)
const about_material=new THREE.MeshStandardMaterial()
about_material.map=about_texture
const about=new THREE.Mesh(
    about_geometry,
    about_material
)

const about1_geometry=new THREE.PlaneBufferGeometry(17.26,7.86)
const about1_material=new THREE.MeshStandardMaterial()
about1_material.map=about1_texture
const about1=new THREE.Mesh(
    about1_geometry,
    about1_material
)

const about2_geometry=new THREE.PlaneBufferGeometry(17.28,7.88)
const about2_material=new THREE.MeshStandardMaterial()
about2_material.map=about2_texture
const about2=new THREE.Mesh(
    about2_geometry,
    about2_material
)

const about3_geometry=new THREE.PlaneBufferGeometry(17.28,9.74)
const about3_material=new THREE.MeshStandardMaterial()
about3_material.map=about3_texture
const about3=new THREE.Mesh(
    about3_geometry,
    about3_material
)

const about4_geometry=new THREE.PlaneBufferGeometry(17.28,8.94)
const about4_material=new THREE.MeshStandardMaterial()
about4_material.map=about4_texture
const about4=new THREE.Mesh(
    about4_geometry,
    about4_material
)

///////////////creating planes of work /////////////////////////////////////////////////////

const work_geometry=new THREE.PlaneBufferGeometry(15.38,8.64)
const work_material=new THREE.MeshStandardMaterial()
work_material.map=work_texture
const work=new THREE.Mesh(
    work_geometry,
    work_material
)


const work1_geometry=new THREE.PlaneBufferGeometry(10.48,12.80)
const work1_material=new THREE.MeshStandardMaterial()
work1_material.map=work1_texture
const work1=new THREE.Mesh(
      work1_geometry,
      work1_material
)
work1.position.z=-2

const work2_geometry=new THREE.PlaneBufferGeometry(11.26,12.8)
const work2_material=new THREE.MeshStandardMaterial()
work2_material.map=work2_texture
const work2=new THREE.Mesh(
      work2_geometry,
      work2_material
)

const work3_geometry=new THREE.PlaneBufferGeometry(9.50,12.8)
const work3_material=new THREE.MeshStandardMaterial()
work3_material.map=work3_texture
const work3=new THREE.Mesh(
      work3_geometry,
      work3_material
)


const work4_geometry=new THREE.PlaneBufferGeometry(12.80,9.77)
const work4_material=new THREE.MeshStandardMaterial()
work4_material.map=work4_texture
const work4=new THREE.Mesh(
      work4_geometry,
      work4_material
)

const work5_geometry=new THREE.PlaneBufferGeometry(9.53,12.8)
const work5_material=new THREE.MeshStandardMaterial()
work5_material.map=work5_texture
const work5=new THREE.Mesh(
      work5_geometry,
      work5_material
)

const work6_geometry=new THREE.PlaneBufferGeometry(10.76,12.80)
const work6_material=new THREE.MeshStandardMaterial()
work6_material.map=work6_texture
const work6=new THREE.Mesh(
      work6_geometry,
      work6_material
)

const work7_geometry=new THREE.PlaneBufferGeometry(9.12,12.8)
const work7_material=new THREE.MeshStandardMaterial()
work7_material.map=work7_texture
const work7=new THREE.Mesh(
      work7_geometry,
      work7_material
)

const work8_geometry=new THREE.PlaneBufferGeometry(12.8,8.41)
const work8_material=new THREE.MeshStandardMaterial()
work8_material.map=work8_texture
const work8=new THREE.Mesh(
      work8_geometry,
      work8_material
)

const work9_geometry=new THREE.PlaneBufferGeometry(8.35,12.8)
const work9_material=new THREE.MeshStandardMaterial()
work9_material.map=work9_texture
const work9=new THREE.Mesh(
      work9_geometry,
      work9_material
)

const work10_geometry=new THREE.PlaneBufferGeometry(12.8,9.02)
const work10_material=new THREE.MeshStandardMaterial()
work10_material.map=work10_texture
const work10=new THREE.Mesh(
      work10_geometry,
      work10_material
)


////////////creating planes for awards////////////////////////////////////////////////////

const awards_geometry=new THREE.PlaneBufferGeometry(15.44,8.64)
const awards_material=new THREE.MeshStandardMaterial()
awards_material.map=awards_texture
const awards=new THREE.Mesh(
    awards_geometry,
    awards_material
)

const awards1_geometry=new THREE.PlaneBufferGeometry(15.44,8.64)
const awards1_material=new THREE.MeshStandardMaterial()
awards1_material.map=awards1_texture
const awards1=new THREE.Mesh(
    awards1_geometry,
    awards1_material
)

const awards2_geometry=new THREE.PlaneBufferGeometry(12.80,8.55)
const awards2_material=new THREE.MeshStandardMaterial()
awards2_material.map=awards2_texture
const awards2=new THREE.Mesh(
    awards2_geometry,
    awards2_material
)

const awards3_geometry=new THREE.PlaneBufferGeometry(10.80,7.20)
const awards3_material=new THREE.MeshStandardMaterial()
awards3_material.map=awards3_texture
const awards3=new THREE.Mesh(
    awards3_geometry,
    awards3_material
)


//////////////creating planes for service/////////////////////////////////////////////////


const services_geometry=new THREE.PlaneBufferGeometry(15.4,8.66)
const services_material=new THREE.MeshStandardMaterial()
services_material.map=services_texture
const services=new THREE.Mesh(
    services_geometry,
    services_material
)

const services1_geometry=new THREE.PlaneBufferGeometry(15.4,8.66)
const services1_material=new THREE.MeshStandardMaterial()
services1_material.map=services1_texture
const services1=new THREE.Mesh(
    services1_geometry,
    services1_material
)


//////////creating planes for conmtact////////////////////////////////////////////////////

const contact_geometry=new THREE.PlaneBufferGeometry(15.4,8.66)
const contact_material=new THREE.MeshStandardMaterial()
contact_material.map=contact_texture
const contact=new THREE.Mesh(
    contact_geometry,
    contact_material
)

const contact1_geometry=new THREE.PlaneBufferGeometry(15.4,8.66)
const contact1_material=new THREE.MeshStandardMaterial()
contact1_material.map=contact1_texture
const contact1=new THREE.Mesh(
    contact1_geometry,
    contact1_material
)





//////////////////////////////////////////////////////////////////////////////////////////////


///////////////light and textures///////////////////////////////////////////////////////////

//ambient light

const ambientlight=new THREE.AmbientLight()
scene.add(ambientlight)


// Point light

const pointLight = new THREE.PointLight('white', 10, 10, 8)
pointLight.position.set(0,0,6)
//scene.add(pointLight)

/////////////////////////////////////////////////////////////////////////////////////////////////////



//creating camera and controls and renderer/////////////////////////////////////////////////////////

//camera

const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,10000)
camera.position.z=cameraz.position
scene.add(camera)

//controls

const controls=new OrbitControls(camera,canvas)
controls.enableDamping=true


//creating renderer

const renderer=new THREE.WebGLRenderer({canvas:canvas})
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))



/////////////////full screen and resizing and update //////////////////////////////////////////////////////



window.addEventListener('resize',()=>{
    sizes.width=window.innerWidth
    sizes.height=window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width,sizes.height)
})

const tick= ()=>{
    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(tick)
}
tick()

console.log(document.fullscreenElement)
window.addEventListener('dblclick', () =>
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullscreenElement)
    {
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    }
    else
    {
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})



//////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////animate and scroll or on click///////////////////////////////////////

window.addEventListener('keypress',(e)=>{
    var key=e.key
    

 
    if(key=='a'){
        const audio=document.createElement('audio')
        audio.src='/textures/music.mp3'
        audio.play()
        scene.add(about)
        scene.remove(home_plane,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
      
    }

    if(key=='b'){
        scene.add(about1)
        scene.remove(home_plane,about,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='c'){
        scene.add(about2)
        scene.remove(home_plane,about,about1,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }
 
    if(key=='d'){
        scene.add(about3)
        scene.remove(home_plane,about,about1,about2,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='e'){
        scene.add(about4)
        scene.remove(home_plane,about,about1,about2,about3,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }
 
    if(key=='f'){
        scene.add(work)
        scene.remove(home_plane,about,about1,about2,about3,about4,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }


    if(key=='g'){
        scene.add(work1)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }


    if(key=='h'){
        scene.add(work2)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }


    if(key=='i'){
        scene.add(work3)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }


    if(key=='j'){
        scene.add(work4)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='k'){
        scene.add(work5)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='l'){
        scene.add(work6)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='m'){
        scene.add(work7)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='n'){
        scene.add(work8)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work9,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }
    

    if(key=='o'){
        scene.add(work9)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work10,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='p'){
        scene.add(work10)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,awards,awards1,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='q'){
        scene.add(awards)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards1,awards2,awards3,services,services1,contact,contact1)

    }

    if(key=='r'){
        scene.add(awards1)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards2,awards3,services,services1,contact,contact1)
    }

    if(key=='s'){
        scene.add(awards2)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards3,services,services1,contact,contact1)
    }

    if(key=='t'){
        scene.add(awards3)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,services,services1,contact,contact1)
    }

    if(key=='u'){
        scene.add(services)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services1,contact,contact1)
        
    }

    if(key=='v'){
        scene.add(services1)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,contact,contact1)
    }

    if(key=='w'){
        scene.add(contact)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact1)
    }

    if(key=='x'){
        scene.add(contact1)
        scene.remove(home_plane,about,about1,about2,about3,about4,work,work1,work2,work3,work4,work5,work6,work7,work8,work9,work10,awards,awards1,awards2,awards3,services,services1,contact)
    }

    

    if(key=='y'){
        location.href = "https://instagram.com/stories/vyom_create_art/2925735443207460220?igshid=MDJmNzVkMjY=";
    }

    if(key=='z'){
        location.href = "mailto:Vyomartisy266@gmail.com";
    }

    


})



///////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////testing random stuff//////////////////////////////////////////////////

const sphere_geometery=new THREE.SphereBufferGeometry(30,64,64)
const sphere_material=new THREE.MeshNormalMaterial()
sphere_material.side=THREE.DoubleSide
const sphere=new THREE.Mesh(
sphere_geometery,
sphere_material
)

scene.add(sphere)

const sphere2_geometry=new THREE.SphereBufferGeometry(29,64,64)
const sphere2_material=new THREE.MeshBasicMaterial({
    wireframe:true,
    color:'black'
})
const sphere2=new THREE.Mesh(sphere2_geometry,sphere2_material)
//scene.add(sphere2)
