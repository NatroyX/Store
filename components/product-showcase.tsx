"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { Suspense } from "react"
import { useGLTF } from "@react-three/drei"

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  return <primitive object={scene} scale={2} />
}

export function ProductShowcase() {
  return (
    <div className="w-full h-[400px] bg-gray-100">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

