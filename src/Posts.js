export default function Posts(){
    const  userPosts = [
        {
            img: "assets/img/meowed.svg",
            user: 'meowed',
            contentImg: "assets/img/gato-telefone.svg",
            likeIcon: "assets/img/respondeai.svg",
            likeUser: "respondeai",
            likeQuantity: "outras 101.523 pessoas"
        },
        {
            img: "assets/img/barked.svg",
            user: 'barked',
            contentImg: "assets/img/dog.svg",
            likeIcon: "assets/img/adorable_animals.svg",
            likeUser: "adorable_animals",
            likeQuantity: "outras 99.159 pessoas"
        }
    ]

    return(
        userPosts.map(a => <Post imagem={a.img} user={a.user} contentImg={a.contentImg}
            likeIcon={a.likeIcon} likeUser={a.likeUser} likeQuantity={a.likeQuantity} />)
    );
}

function Post(props){
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem}/>
                    {props.user}
                </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.contentImg} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeIcon} />
                        <div class="texto">
                            Curtido por <strong>{props.likeUser}</strong> e <strong>{props.likeQuantity}</strong>
                        </div>
                </div>
            </div>
        </div>
    );
}
