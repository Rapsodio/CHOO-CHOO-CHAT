import { useState } from "react";

function Input(props){
    const { onLetter } = props;

    const [text, setText] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        setText("");
        onLetter(text);
    }
    
    const handleValueChange = (event) => {
        setText(event.target.value);
    }

    return(
        <div className="input-div">
            <form onSubmit={e => onFormSubmit(e)} className="form">
                <input type="text" onChange={handleValueChange} placeholder="Start Chating" autoFocus={true} value={text}className="inp"/>
                <button className="btn">SEND</button>
            </form>
        </div>
    )
}

export default Input;