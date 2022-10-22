function randomId(){
    const random = require("random");
    const id = random.float();
    return id;
}

function Messages(props){

    const { korisnik } = props;
    const { poruke } = props;


    const ispisiPoruke = (message) => {
        const { member, text } = message;
        const stil = member.id === korisnik.id ? "poruka-trenutni-korisnik" : "poruka";
        const stilPoruka = member.id === korisnik.id ? "boja-poruke-trenutni" : "boja-poruke";
        const sadrzajStil = member.id === korisnik.id ? "poruka-sadrzaj-trenutni" : "poruka-sadrzaj";
        return(
            <li className={stil} key={randomId()}>
                <div className={sadrzajStil}>
                    <div className="username">
                        {member.clientData.username}
                    </div>
                    <div className={stilPoruka}> 
                        <p>{text}</p>
                    </div>
                </div>
            </li>
        )
    };

   
    return(
        <div className="lista-div">
            <ul className="lista-poruka">
                {poruke.map(el => ispisiPoruke(el))}
            </ul>
        </div>
    )
}

export default Messages;