var limbs = [
    new THREE.BoxGeometry( 10, 10, 10 ), 
    new THREE.SphereGeometry( 10, 20, 15 ), 
    new THREE.ConeGeometry( 10, 10, 30 ), 
    new THREE.CylinderGeometry( 10, 10, 10, 5 ), 
    new THREE.TorusGeometry( 7, 3, 10, 30 ), 
    new THREE.TorusKnotGeometry( 7, 3, 10, 30 ), 
    new THREE.DodecahedronGeometry(7)
]
var bodies = [
    new THREE.BoxGeometry( 30, 60, 30 ), 
    new THREE.SphereGeometry( 30, 20, 15 ), 
    new THREE.ConeGeometry( 30, 60, 30 ), 
    new THREE.CylinderGeometry( 20, 30, 50, 5 ), 
    new THREE.TorusGeometry( 20, 10, 10, 30 ), 
    new THREE.TorusKnotGeometry( 20, 10, 10, 30 ), 
    new THREE.DodecahedronGeometry(20)
]
var colorArray = [new THREE.Color(0xffaaff), new THREE.Color(0xffaaff),  new THREE.Color(0xffaaff),  new THREE.Color(0xffaaff),  new THREE.Color(0xffaaff)]; 
var uniforms = {u_resolution: {type: "v2", value: new THREE.Vector2()}, 
                u_colors: {type: "v3v", value: colorArray}};

var materials = [
    new THREE.ShaderMaterial( {  
        uniforms: uniforms,
        vertexShader: document.getElementById("vertex").textContent,
        fragmentShader: document.getElementById("stripeFragment").textContent,
    }), 
    new THREE.ShaderMaterial( {  
        uniforms: uniforms,
        vertexShader: document.getElementById("vertex").textContent,
        fragmentShader: document.getElementById("gradientFragment").textContent,
    }), 
    new THREE.ShaderMaterial( {  
        uniforms: uniforms,
        vertexShader: document.getElementById("vertex").textContent,
        fragmentShader: document.getElementById("plainFragment").textContent
    }), 
    new THREE.ShaderMaterial( {  
        uniforms: uniforms,
        vertexShader: document.getElementById("vertex").textContent,
        fragmentShader: document.getElementById("plainFragment").textContent,
        wireframe: true 
    })

]
