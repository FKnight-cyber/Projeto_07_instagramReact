export default function User(){
    const user = {
        userImg: "assets/img/catanacomics.svg",
        userTitle: "catanacomics",
        userName: "Catana"
    }

    return(
        <RenderUser {...user} />
    );
}

function RenderUser(props){
    return(
        <div class="usuario">
              <img src={props.userImg} />
            <div class="texto">
                <strong>{props.userTitle}</strong>
                    {props.userName}
            </div>
        </div>
    );
}