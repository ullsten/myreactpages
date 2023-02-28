import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './Photos.css'
import { WhiteCar, Doplphins, GreenForest, RoseInWater, Lightning, CityByNight,
Space, PalmTrees, Waterfall, Bed } from '../../img/mixed';

const onclickEnlarge = ()=>{
  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("picture");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0, img; img = imgs[i]; i++) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
} 

// Get the <span> element that closes the modal
//change "modal" to close to close on X only .
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

} 
export default function Photos(){


  return(
    //photos container starts
    <section className='Photos'>
    <header className="photoHeader">
    <h1 className='mb-4'>Some random photos</h1>
    {/* <h5>click on image for larger size</h5> */}
    {/* <!-- not visible on page but when print --> */}
    {/* <a href="http://www.oskarullsten.se/Labb1_SkapaCV_Sida/html/photos.html"><p className="printContent">(full size available on my website)</p></a> */}
    {/* <!-- ends --> */}
    </header>
     
  <section className="photoContent">
      <figure className="pictureContainer">
        <img className="picture" src={WhiteCar} alt="white car"/>
        <img className="picture" src={Doplphins} alt="Doplphins"/>
        <img className="picture" src={GreenForest} alt="Green forrest"/>
        <img className="picture" src={RoseInWater}alt="Rose in water"/>
        <img className="picture" src={Lightning} alt="Lightning"/>
        <img className="picture" src={CityByNight} alt="City by night"/>
        <img className="picture" src={Space} alt="Space"/>
        <img className="picture" src={PalmTrees} alt="Palm trees by the beach"/>
        <img className="picture" src={Waterfall} alt="Waterfall"/>
        <img className="picture" src={Bed} alt="Bed"/>
      </figure>
      
      {/* <!-- The Modal to create clickable image--> */}
    <section id="myModal" className="modal">
      {/* <!-- The Close Button --> */}
      <span className="close">&times;</span>
      {/* <!-- Modal Content (The Image) --> */}
      <img className="modal-content" id="img01"/>
      {/* <!-- Modal Caption (Image Text) --> */}
      <section id="caption"></section>
        
  </section>
</section>
</section>
  );
};


