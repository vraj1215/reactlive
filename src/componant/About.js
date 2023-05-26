import React, { useState } from 'react'
import propTypes from 'prop-types'
export default function About(props) {

  // let mystyle={
  //   color:"white",
  //   backgroundColor:"black",

  // }
  // let mystyle2={
  //   color:"black",
  //   backgroundColor:"white"
  // }
  // const [props.m,setmys]=useState(mystyle2)

  // const [btnt,sbtnt]=useState("enable dark mode")
  // function end(){
  //   if(props.m.color==="black"){
  //     setmys(mystyle);
  //     sbtnt("disable dark mode")
  //   }
  //   else{
  //     setmys(mystyle2)
  //     sbtnt("enable dark mode")
  //   }
  // }

  return (
    <div className='container my-5' >
      <div className={`bg-${props.cl.clr}`} style={{ width: "100%", height: "8px", borderRadius: "4px" }}></div>
      <h1 className={`text-${props.cl.clr}`}><strong>About Us</strong></h1>


      {/* ............ */}
      <div class="accordion" id="accordionExample">
        <div class={`accordion-item bg-transparent text-${props.cl.clr}`}>
          <h2 class="accordion-header">
            <button class={`accordion-button bg-transparent text-${props.cl.clr}`} style={{color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class={`accordion-item bg-transparent text-${props.cl.clr}`}>
          <h2 class="accordion-header">
            <button class={`accordion-button collapsed bg-transparent text-${props.cl.clr}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class={`accordion-item bg-transparent text-${props.cl.clr}`}>
          <h2 class="accordion-header">
            <button class={`accordion-button collapsed bg-transparent text-${props.cl.clr}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>



      {/* ................. */}

    </div>

  )
}
About.propTypes = { mode: propTypes.string }