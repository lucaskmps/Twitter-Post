// Variáveis
let tweetNumber = 0;
let followingNumber = 0;
let followersNumber = 0;




// Abrir Input para tweetar
function openInput(div, btn){
    document.querySelector(div).style.paddingBottom = '80px'
    document.querySelector(btn).style.display = 'flex'

    document.addEventListener('click', function(e){

        if(e.target.id != 'input-tweet' && e.target.id != 'tweet-btn'){
             document.querySelector('.post-box input').style.paddingBottom = '10px'
             document.querySelector('.btn-wrapper').style.display = 'none'
       }
    })
}





// Criar Tweet
function makeTweet(tweet){
let message = document.querySelector(tweet).value

if(message.length > 1){

    let id = 'tweet-number-' + tweetNumber
    // Criando a Caixa de tweet pura
    let tweetbox = document.createElement("div")
    tweetbox.setAttribute("class", "tweet");
    tweetbox.setAttribute("id", id)

            // Criando Avatar Box
            let avatarbox = document.createElement("div")
            avatarbox.setAttribute("class","tweet-avatar")

            //Colocando a Imagem do Avatar na Avatarbox
            let avatar = document.createElement("img")
            avatar.src = './img/user/avatar.jpg'
            avatarbox.appendChild(avatar)

//######################################################################################

    // Criando a right-wrapper
    let rightWrapper = document.createElement("div")
    rightWrapper.setAttribute("class", 'right-wrapper')

//######################################################################################

                // Criando Name e Username Box
                let nameUserBox = document.createElement("div")
                nameUserBox.setAttribute("class", "tweet-name-user")

                // Colocando o nome e user na box
                let name = document.createElement("p")
                name.innerHTML = document.querySelector('.username-box p').textContent

                let user = document.createElement("span")
                user.innerHTML = '@' + document.querySelector('.username-box .username').textContent

                nameUserBox.appendChild(name)
                nameUserBox.appendChild(user)

                    // Criando texto do tweet
                    let tweetTextBox = document.createElement("div")
                    tweetTextBox.setAttribute("class", "tweet-text-box")

                    tweetTextBox.innerText = message

            // Criando o grid de comments, retweets e likes
            let interationsGrid = document.createElement('div')
            interationsGrid.setAttribute('class', 'interations-box')

            // Icones
            let commentsIcon = document.createElement('img')
            commentsIcon.src = './img/comment.svg'
            commentsIcon.setAttribute('id', 'commentsIcon')

            let retweetsIcon = document.createElement('img')
            retweetsIcon.src = './img/retweet.svg'
            retweetsIcon.setAttribute('id', 'retweetsIcon')

            let likesIcon = document.createElement('img')
            likesIcon.src = './img/like.svg'
            likesIcon.setAttribute('id', 'likesIcon')

            // Números
            let postLikes = random(Math.floor(followersNumber/10))

            let commentsNumber = document.createElement('p')
            commentsNumber.setAttribute('id', 'comments')
            commentsNumber.innerText = random(postLikes)

            let retweetsNumber = document.createElement('p')
            retweetsNumber.setAttribute('id', 'rts')
            retweetsNumber.innerText = random(postLikes)

            let likesNumber = document.createElement('p')
            likesNumber.setAttribute('id', 'likes')
            likesNumber.innerText = postLikes

            // Acrescentando tudo no grid de interações
            interationsGrid.appendChild(commentsIcon)
            interationsGrid.appendChild(retweetsIcon)
            interationsGrid.appendChild(likesIcon)
            interationsGrid.appendChild(commentsNumber)
            interationsGrid.appendChild(retweetsNumber)
            interationsGrid.appendChild(likesNumber)

                            // Colocando tudo na rightWrapper
                            rightWrapper.appendChild(nameUserBox)
                            rightWrapper.appendChild(tweetTextBox)
                            rightWrapper.appendChild(interationsGrid)

//######################################################################################

    // Acrescentando a rightWrapper e avatarbox no tweetbox.
    tweetbox.appendChild(avatarbox)
    tweetbox.appendChild(rightWrapper)

            // Timeline
            let divPai = document.querySelector('main#content')

            // Div Referencia
            let newID = '#tweet-number-' + (tweetNumber - 1)
            var divReferencia = document.querySelector(newID)

            // Inserindo o tweet na timeline.
            divPai.insertBefore(tweetbox, divReferencia);

//######################################################################################

    // Limpando a caixa de tweet e acrescentando +1 ao tweetNumber.
    document.querySelector(tweet).value = ''
    tweetNumber++

       // Mudando a Opacity do tweet para 1 (Animando)
       setTimeout(() => {
        document.querySelector('.tweet').style.opacity = '1'
       }, 75);
     
        // função Engajamento
        engajamento()
}
else{
    alert('Tweet Something...')
}
}




// Aumentar engajamento a cada tweet
function engajamento(){
    followingNumber += random(10)
    followersNumber += random(20)

    document.querySelector('#tweets-number-profile').innerText = tweetNumber
    document.querySelector('#following').innerText = followingNumber
    document.querySelector('#followers').innerText = followersNumber
}




// função random, só pra ficar mais limpo
function random(number){
    return Math.floor(Math.random () * number)
}



