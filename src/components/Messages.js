function randomId(){
    const random = require("random");
    const id = random.float();
    return id;
}
function Messages(props){
    
    const { posting } = props;
    const { user } = props;
    
    const printMessages = (message) => {
        const { text, member } = message;
        const contentstyle = member.id === user.id ? "content-message" : "content-message-comp";
        const styling = member.id === user.id ? "message-user" : "message-comp";
        const styleMessage = member.id === user.id ? "colour-message" : "colour-message-comp";
       
        return(
            <li className={styling} key={randomId()}>
                <div className={contentstyle}>
                    <div className="username">
                        {member.clientData.username}
                    </div>
                    <div className={styleMessage}> 
                        <p>{text}</p>
                    </div>
                </div>
            </li>
        )
    };
return(
        <div className="lists-div">
            <ul className="message-lists">
                {posting.map(el => printMessages(el))}
            </ul>
        </div>
    )
}
export default Messages;