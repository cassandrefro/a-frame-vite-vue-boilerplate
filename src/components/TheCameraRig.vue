<script setup>

  import '../aframe/bind-position.js';
  import '../aframe/bind-rotation.js';
  import '../aframe/disable-in-vr.js';
  import '../aframe/hide-in-vr.js';
  import '../aframe/simple-navmesh-constraint.js';
  import '../aframe/blink-controls.js';
  import '../aframe/physx-grab.js';
  import '../aframe/look-at.js';
</script>

<template>
  <a-entity
    id="camera-rig"
    movement-controls="camera: #head;"
    disable-in-vr="component: movement-controls;"
  >

      <a-entity
        id="head"
        look-controls="pointerLockEnabled: true"
        simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
        disable-in-vr="component: simple-navmesh-constraint;"
        camera
        position="0 1.65 0"
      >
        <a-entity
          geometry="primitive: circle; radius: 0.0003;"
          material="shader: flat; color: white;"
          cursor
          raycaster="far: 4; objects: [clickable]; showLine: false;"
          position="0 0 -0.1"
          disable-in-vr="component: raycaster; disableInAR: false;"
          hide-in-vr="hideInAR: false"
        ></a-entity>
      </a-entity>

      <a-entity
        id="hand-left"
        hand-controls="hand: left"
        blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        "
        physx-grab
      >
        <a-sphere id="hand-left-collider"
          radius="0.02"
          visible="false"
          physx-body="type: kinematic; emitCollisionEvents: true">
        </a-sphere>
      </a-entity>

      <a-entity
        id="hand-right"
        hand-controls="hand: right"
        laser-controls="hand: right"
        raycaster="far: 4; objects: [clickable]; showLine: true;"
        physx-grab
      >
        <a-sphere id="hand-right-collider"
          radius="0.02"
          visible="false"
          physx-body="type: kinematic; emitCollisionEvents: true">
        </a-sphere>
      </a-entity>

      <a-entity
        id="inventory-3d"
        position="0 1.65 -0.5"
        scale="0.2 0.2 0.2"
      >
        <a-box 
          material="color: #33ff33; opacity: 0.7"
          position="0 0 0"
          scale="1 1 1"
          visible="false"
        />
        <a-entity rotation="0 0 -180">
          <a-light
            type="point"
            intensity="0.5"
            color="#33ff33"
            position="0 0 0"/>
        </a-entity>

        <a-entity
          id="inventory-cauldron"
          gltf-model="url(assets/cauldron_green.glb)"
          clickable
          position="6 0 0"
          scale="1 1 1"
        />  
      </a-entity>

      <a-entity
        id="modal"
        position="0 1.65 -10"
        scale="1 1 1"
        visible="false"
        look-at
      >
        <a-plane material="color: black">
          <a-text
            value="Inventaire"
            align="left"
            width="1"
            position="-0.4 0.4 0"
            scale="0.8 0.8 0.8"
          ></a-text>
          <a-text
            id="cauldron-modal-text"
            value="Chaudron"
            align="left"
            width="1" 
            position="-0.4 0.3 0"
            scale="0.7 0.7 0.7"
          ></a-text>
          <a-text
            value="Champignon"
            align="left"
            width="1"
            position="-0.4 0.25 0"
            scale="0.7 0.7 0.7"
          ></a-text>
        </a-plane>
      </a-entity>
      

  </a-entity>
</template>