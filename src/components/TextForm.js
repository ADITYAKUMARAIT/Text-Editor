import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleOnClick=()=>{
        // console.log('button  is clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase!","success")
    }

    const hangleOnChange=(event)=>{
        // console.log('onChange')
        setText(event.target.value)
    }
    const conerTolower=()=>{
        let  newText = text.toLowerCase();
        setText(newText);
        props.showalert("converted to lowercase!","success")
    }
    const copyText=()=>{
        let temp = document.getElementById("myBox");
        temp.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text copied ","success")
    }

    return (
        <>
        <div className='container'> 
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={hangleOnChange} style={{backgroundColor: props.mode==='light'?'light':'white'}}></textarea>
                <button className="btn btn-primary" onClick={handleOnClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-3"  onClick={conerTolower} >convert to lowercase </button>
                <button className="btn btn-primary mx-3"  onClick={copyText} >copy text </button>
            </div>
        </div>
        <div className="container my-3">
            <h1>Your text summary </h1>
            <p>{text.split(' ').length-1} words and {text.length}character</p>
            <p>{0.008 * text.split(" ").length} time to read the text </p>
        </div>
        </>
    )
}
