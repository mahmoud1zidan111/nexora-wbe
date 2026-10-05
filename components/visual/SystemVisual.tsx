"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Model() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(
    "https://cdn.tinyglb.com/models/651ce757c3294dcd9a7505f1b350caee.glb",
  );

  const model = useMemo(() => {
    const cloned = scene.clone();
    cloned.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;
      const material = child.material;
      if (Array.isArray(material)) {
        material.forEach((entry) => {
          if (entry instanceof THREE.MeshStandardMaterial) {
            entry.roughness = 0.5;
            entry.metalness = 0.82;
            entry.emissive = new THREE.Color("#1f6af2");
            entry.emissiveIntensity = 0.18;
          }
        });
        return;
      }
      if (material instanceof THREE.MeshStandardMaterial) {
        material.roughness = 0.52;
        material.metalness = 0.82;
        material.emissive = new THREE.Color("#1f6af2");
        material.emissiveIntensity = 0.16;
      }
    });
    return cloned;
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;

    const targetX = state.pointer.y * 0.4;
    const targetY = state.pointer.x * 0.9 + 0.6;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.04,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.04,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      state.pointer.y * 0.15,
      0.04,
    );
  });

  return (
    <group ref={group} scale={1.35} position={[0, 0.1, 0]}>
      <primitive object={model} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#071119"]} />
      <fog attach="fog" args={["#071119", 7, 16]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={1.8} color="#cfe6ff" />
      <pointLight
        position={[-2, 2, 2]}
        intensity={18}
        color="#59d0ff"
        distance={8}
      />
      <pointLight
        position={[2, -1, 3]}
        intensity={20}
        color="#2d6bff"
        distance={10}
      />
      <Float speed={1.7} rotationIntensity={0.85} floatIntensity={0.7}>
        <Model />
      </Float>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.75, 0]}
        receiveShadow
      >
        <circleGeometry args={[3.6, 64]} />
        <meshStandardMaterial color="#0b1b2d" transparent opacity={0.8} />
      </mesh>
      <Environment preset="city" />
      <EffectComposer>
        <Bloom
          intensity={0.65}
          luminanceThreshold={0.18}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
      <OrbitControls
        enablePan={false}
        enableRotate
        enableZoom
        minDistance={4.2}
        maxDistance={6.5}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}

export function SystemVisual({ label = "CORE_ARCH_01" }: { label?: string }) {
  return (
    <div
      className="system-visual"
      aria-label="Nexora digital architecture visualization"
    >
      <div className="visual-top">
        <span className="status-dot" />
        <span>SYS_MODEL // {label}</span>
        <span>LAT 37.77 // LNG -122.41</span>
      </div>
      <div className="visual-stage">
        <Canvas camera={{ position: [0, 0.25, 6], fov: 30 }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>
      <div className="visual-bottom">
        <span>STRUCT_ID 94E4550 / HIGH DENSITY ACTIVE</span>
        <span>RENDER: GPU_STABLE</span>
      </div>
    </div>
  );
}
