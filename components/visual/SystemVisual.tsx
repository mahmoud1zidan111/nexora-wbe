"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const MODEL_URL =
  "https://cdn.tinyglb.com/models/651ce757c3294dcd9a7505f1b350caee.glb";

function Model() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  const model = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      // Shadows are expensive and aren't necessary for this visual.
      child.castShadow = false;
      child.receiveShadow = false;

      const material = child.material;

      const optimizeMaterial = (mat: THREE.Material | THREE.Material[]) => {
        if (!(mat instanceof THREE.MeshStandardMaterial)) return;

        mat.roughness = 0.52;
        mat.metalness = 0.82;

        mat.emissive = new THREE.Color("#1f6af2");
        mat.emissiveIntensity = 0.12;
      };

      if (Array.isArray(material)) {
        material.forEach(optimizeMaterial);
      } else {
        optimizeMaterial(material);
      }
    });

    return cloned;
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    // Mouse parallax
    const targetRotationX = state.pointer.y * 0.3;
    const targetRotationY = state.pointer.x * 0.65 + 0.6;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetRotationX,
      0.035,
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotationY,
      0.035,
    );

    // Smooth vertical movement
    const targetY = 0.1 + state.pointer.y * 0.1 + Math.sin(time * 1.1) * 0.035;

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      targetY,
      0.035,
    );

    // Very subtle continuous rotation
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(time * 0.7) * 0.025,
      0.03,
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
      {/* Background */}
      <color attach="background" args={["#071119"]} />

      <fog attach="fog" args={["#071119", 7, 16]} />

      {/* Main soft lighting */}
      <ambientLight intensity={0.75} />

      <directionalLight position={[3, 5, 4]} intensity={1.35} color="#cfe6ff" />

      {/* One accent light instead of multiple expensive lights */}
      <pointLight
        position={[-2, 2, 3]}
        intensity={10}
        color="#59d0ff"
        distance={7}
      />

      <Model />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.75, 0]}>
        <circleGeometry args={[3.6, 32]} />

        <meshStandardMaterial
          color="#0b1b2d"
          transparent
          opacity={0.7}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Environment lighting */}
      <Environment preset="city" />

      {/* Lightweight Bloom */}
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.35}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.7}
          mipmapBlur={false}
        />
      </EffectComposer>
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
        <Canvas
          camera={{
            position: [0, 0.25, 6],
            fov: 30,
          }}
          dpr={[1, 1.35]}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
            alpha: false,
          }}
          performance={{
            min: 0.5,
            max: 1,
            debounce: 200,
          }}
        >
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
