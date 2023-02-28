import React from "react";
import { HiddenEasterEgg } from "react-hidden-easter-egg";
import { ConfettiCanvas } from "react-raining-confetti";
import './Eggs.css'

export default function SecretConfettiEgg() {
  return (
    <div className="Egg">
      {/* <h1> react-hidden-easter-egg !!! </h1>
      <h1> type 'confetti' and see what happened</h1> */}
      <HiddenEasterEgg code={['c', 'o', 'n', 'f', 'e', 't', 't', 'i']} resetEggMs={10000} cb={() => console.log('start raining')}>
         <ConfettiCanvas active={true} fadingMode="LIGHT" stopAfterMs={5000} />
      </HiddenEasterEgg>
    </div>
  );
}
