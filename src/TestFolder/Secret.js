import React, {useState} from "react"

const myKey = "oskar"

export const SecretComponent = () => {
    let keyInput = ""
    
    document.addEventListener("keydown", (key)=>{
        keyInput += key.key
        if(myKey === keyInput){
            // alert("Hello! You found me!")
            
        }
        else{
            setTimeout(()=>{
                keyInput=""
            },2000)
        };
    });
    return(
        <div>


        </div>
       
    )
};