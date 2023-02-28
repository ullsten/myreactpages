import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { SpinnerDotted } from "spinners-react";

export default function Loading() {
  return (
    <div className="loading p-3 mt-5 text-warning rounded text-center w-50 m-auto">
    {
        <SpinnerDotted size={90} thickness={138} speed={144} color="rgba(172, 57, 125, 1)" />
    }
   </div>
  );
;}