import React,{useState} from 'react'
import propTypes from 'prop-types'
// import {usestate} from 'react'

export default function Form(props) {
    const state=useState();
    // console.log(state)
    const[text,Settext]=useState('')
    const [pla,setplac]=useState('enter your text here')
    function handleupclick(){
        // console.log("upper click was clicked");
        Settext(text.toUpperCase());
        if(text.length>0)
        props.sm(text.toUpperCase(),"success");
    }
    function chang(event){
        // console.log("value is changed")
        Settext(event.target.value);
        // props.sm(event.target.value,"success");
    }
    function handleupclick2(){
        
        props.sm(null);
        setplac("enter your text here");
        Settext(" ")
    }
    function f(){
        const a=text.split(" ").filter((ele)=>{
            if(ele.toLowerCase().indexOf("@")!==-1 && ele.toLowerCase().indexOf('.')!==-1 && ele.toLowerCase().indexOf("com")!==-1){
                return ele;
                
            }
        })
        // console.log(a.join(','));
        Settext(a.join(','));
        if(a.join(',').length>0)
        props.sm(a.join(','),"success");
    }
    function e(){
        let c=" ";
        let length=text.length;
        for(let i=length-1 ;i>=0;i--){
            // c.push(text[i]);
            c+=text[i];
        }
       Settext(c); 
       if(text.length>0){
       props.sm(c,'success');}
        // console.log(c)
    }
    let my1={
        color:"white"
        ,backgroundColor:"black"
    }
    // const [mys,setmys]=useState(my1);
    let wordcount=0;
    // console.log(text.split( ' ').length)
    // console.log(text.split(' '))
    
    let bgc=props.cl.bgc
   
    return (
        <div className={`container text-${props.cl.clr}`} >
            <div className={`bg-${props.cl.clr}`} style={{ width: "100%", height: "8px", borderRadius: "4px" }}></div>
            <h1><strong>{props.heading}</strong></h1>
            
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text}  style={{backgroundColor:bgc}} placeholder={pla}  onChange={chang} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
             <button className={`btn btn-${props.cl.clr}  mx-1`} onClick={handleupclick}>convert to upper case</button> 
             <button className={`btn btn-${props.cl.clr}  mx-1`} onClick={handleupclick2}>erace everything</button> 
             <button className={`btn btn-${props.cl.clr}  mx-1`} onClick={f}>email detect</button> 
             <button className={`btn btn-${props.cl.clr}  mx-1`} onClick={e}>inverse text</button> 
             <h1>your text summery</h1>
             <p>there are {text.split(' ').pop().length} words and {text.length}character</p>
             <p>you will required {0.008 * text.split(" ").length } minutes </p>
        </div>
    )
}
Form.propTypes={heading:propTypes.string,mode:propTypes.string.isRequired}
Form.defaultProps={
    heading:"enter your details"
}