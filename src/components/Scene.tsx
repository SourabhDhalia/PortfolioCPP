import React from 'react';
import { Canvas } from '@react-three/fiber';

const Scene = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#e9eff5]">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </Canvas>
        </div>
    );
};

export default Scene;
