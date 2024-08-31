import React, { useEffect, useRef, useState } from "react";
import { Html, useAnimations, useGLTF } from "@react-three/drei";

useGLTF.preload("/dije2/dije3.gltf");

const Dije = ({ action }) => {
  const modelRef = useRef(null);
  const { scene, animations } = useGLTF("/dije2/dije3.gltf");
  const { actions } = useAnimations(animations, scene);

  const previousAction = usePrevious(action);

  console.log(action);

  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
    }
    actions[action].repetitions = 1;
    actions[action].clampWhenFinished = true;
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);

  return (
    <>
      <group
        rotation={[0, 0.4, 0.2]}
        position={[0, -0.5, 0]}
        scale={0.4}
        ref={modelRef}
      >
        <primitive object={scene} scale={[2, 2, 2]} />
      </group>
    </>
  );
};

export default Dije;

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
