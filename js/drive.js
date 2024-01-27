AFRAME.registerComponent("drive",{
    init:function(){
        var gameStateValue = this.el.getAttribute("game");
        //if(gameStateValue=="play"){
            this.driveCar();
        //}
    },
    isVelocityActive:function(){
        return Math.random()<0.25;
    },
    driveCar:function(){
        var multiply = 10;
        var rotation = 0;
        window.addEventListener('keydown',function(e){
            var wheel = this.document.querySelector('#control-wheel')
            if(e.code == "ArrowRight" && rotation >-40){
                rotation-=5
                wheel.setAttribute("rotation",{x:0, y:0, z:rotation})
            }
            if(e.code == "ArrowLeft" && rotation<40){
                rotation+=5
                wheel.setAttribute("rotation",{x:0, y:0, z:rotation})
            }
        var cameraRig = this.document.querySelector("#camera-rig")
        var cameraRotation = cameraRig.getAttribute("rotation")
        var cameraPosition = cameraRig.getAttribute("position")
        var cameraMoveControl = cameraRig.getAttribute("movement-controls")
            cameraRig.setAttribute("movement-controls",{"speed":cameraMoveControl.speed+0.005})
        var camerDirection = new THREE.Vector3()
            cameraRig.object3D.getWorldDirection(camerDirection)
            if(e.code == "ArrowRight"){
                cameraRotation.y-=5
                cameraRig.setAttribute("rotation",{x:0, y:cameraRotation.y, z:0})
                cameraRig.setAttribute("movement-controls",{"speed":cameraMoveControl.speed+0.005})
            }
            if(e.code == "ArrowLeft"){
                cameraRotation.y+=5
                cameraRig.setAttribute("rotation",{x:0, y:cameraRotation.y, z:0})
                cameraRig.setAttribute("movement-controls",{"speed":cameraMoveControl.speed+0.005})
            }
        })
    }
})