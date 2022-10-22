import { useState } from "react";

function Input(props){
    const { onPoruka } = props;

    const [text, setText] = useState("");
    
    const handleValueChange = (event) => {
        setText(event.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setText("");
        onPoruka(text);
    }
    
    return(
        <div className="input-div">
            <form onSubmit={e => onFormSubmit(e)} className="form">
                <input type="text" onChange={handleValueChange} placeholder="Write your message" autoFocus={true} value={text}className="inp"/>
                <button className="btn">Send!</button>
            </form>
        </div>
    )
}

export default Input;