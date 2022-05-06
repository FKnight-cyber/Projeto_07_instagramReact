function Story(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    );
    
}

export default function Stories(){
    const storiesUsers = [
        {
            img: "assets/img/9gag.svg",
            user:'9gag'
        },
        {
            img: "assets/img/meowed.svg",
            user:'meowed'
        },
        {
            img: "assets/img/barked.svg",
            user:'barked'
        },
        {
            img: "assets/img/nathanwpylestrangeplanet.svg",
            user:'nathanwpylestrangeplanet'
        },
        {
            img: "assets/img/wawawicomics.svg",
            user:'wawawicomics'
        },
        {
            img: "assets/img/respondeai.svg",
            user:'respondeai'
        },
        {
            img: "assets/img/filomoderna.svg",
            user:'filomoderna'
        },
        {
            img: "assets/img/memeriagourmet.svg",
            user:'memeriagourmet'
        },
    ]      

    return(
       storiesUsers.map(a => <Story image={a.img} user={a.user} />)
    );
}



