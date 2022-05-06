export default function Sugestoes(){
    const userSuggestions = [
        {
            userImg: "assets/img/bad.vibes.memes.svg",
            userName: "bad.vibes.memes",
            whyFollow: "Segue você"
        },
        {
            userImg: "assets/img/chibirdart.svg",
            userName: "chibirdart",
            whyFollow: "Segue você"
        },
        {
            userImg: "assets/img/razoesparaacreditar.svg",
            userName: "razoesparaacreditar",
            whyFollow: "Novo no Instagram"
        },
        {
            userImg: "assets/img/adorable_animals.svg",
            userName: "adorable_animals",
            whyFollow: "Segue você"
        },
        {
            userImg: "assets/img/smallcutecats.svg",
            userName: "smallcutecats",
            whyFollow: "Segue você"
        }
    ]
    return(
        userSuggestions.map(a => <Sugestao userImg={a.userImg} userName={a.userName} whyFollow={a.whyFollow} />)
    );
}

function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userImg} />
                <div class="texto">
                    <div class="nome">{props.userName}</div>
                    <div class="razao">{props.whyFollow}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}