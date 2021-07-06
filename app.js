


document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
                 {
                    name: 'basket',
                    img: 'images/basket.jpg'
                },
                
                {
                    name: 'book',
                    img: 'images/book.jpg'
                },
                // {
                //     name: 'coffee',
                //     img: 'images/coffee.jpg'
                // },
                {
                    name: 'cooking',
                    img: 'images/cooking.jpg'
                },
                {
                    name: 'eggs',
                    img: 'images/eggs.jpg'
                },
                {
                    name: 'fridge',
                    img: 'images/fridge.jpg'
                },
                {
                    name: 'basket',
                    img: 'images/basket.jpg'
                },
                
                {
                    name: 'book',
                    img: 'images/book.jpg'
                },
                // {
                //     name: 'coffee',
                //     img: 'images/coffee.jpg'
                // },
                {
                    name: 'cooking',
                    img: 'images/cooking.jpg'
                },
                {
                    name: 'eggs',
                    img: 'images/eggs.jpg'
                },
                {
                    name: 'fridge',
                    img: 'images/fridge.jpg'
                },
                {
                    name: 'moon',
                    img: 'images/moon.jpg'
                },
               
                {
                    name: 'room',
                    img: 'images/room.jpg'
                },
               
                {
                    name: 'tv',
                    img: 'images/tv.jpg'
                },
                {
                    name: 'umbrella',
                    img: 'images/umbrella.jpg'
                },
                {
                    name: 'moon',
                    img: 'images/moon.jpg'
                },
               
                {
                    name: 'room',
                    img: 'images/room.jpg'
                },
              
                {
                    name: 'tv',
                    img: 'images/tv.jpg'
                },
                {
                    name: 'umbrella',
                    img: 'images/umbrella.jpg'
                },
                {
                  name: 'car',
                  img: 'images/car.jpg'
              },
              {
                  name: 'cake',
                  img: 'images/cake.jpg'
              },
              {
                name: 'tea',
                img: 'images/tea.jpg'
            },
            {
              name: 'car',
              img: 'images/car.jpg'
          },
          {
              name: 'cake',
              img: 'images/cake.jpg'
          },
          {
            name: 'tea',
            img: 'images/tea.jpg'
        },
            {
                name: 'night',
                img: 'images/night.jpg'
            },
            {
              name: 'sky',
              img: 'images/sky.jpg'
          },
          {
              name: 'computer',
              img: 'images/computer.jpg'
          },
          {
            name: 'night',
            img: 'images/night.jpg'
        },
        {
          name: 'sky',
          img: 'images/sky.jpg'
      },
      {
          name: 'computer',
          img: 'images/computer.jpg'
      },
                

  ]



  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  const game = document.querySelector('.game')
  const intro = document.querySelector('.intro')
  const playBtn = document.querySelector('.intro button')
  const title = document.querySelector('.intro h1')




  function startGame() {

    playBtn.addEventListener('click', () => {
      intro.classList.add('fadeOut')
      game.classList.add('fadeIn')
      countDown()
    })
  }

  startGame()


  function restartGame() {
    game.classList.remove('fadeIn')
    intro.classList.add('fadeIn')
    playBtn.textContent = "Try again!"
    title.textContent = "Oops! You ran out of time"
    playBtn.addEventListener('click', () => {

        location.reload()

    })
    

    
  }

  

  //countDown timer

  function countDown() {
    
    let timeSecond = 120;
    const timeH = document.querySelector('.time p')

    displayTime(timeSecond);

    const countDown = setInterval(() => {
      timeSecond --
      displayTime(timeSecond)
      if(timeSecond == -1) {
        // endCount();
        timeH.innerHTML = "00:00"

        clearInterval(countDown);
        restartGame()

      }
    },1000);
    function displayTime(second) {
      const min = Math.floor(second/60)
      const sec = Math.floor(second % 60)
      timeH.innerHTML = `${min < 10 ? "0":""}${min} : ${sec<10?"0":""}${sec}`;
    }

    function endCount() {
      timeH.innerHTML = "00:00"
      
      alert("Time Out!")

    }

    
  }


  //create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        // alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        // alert('Sorry, try again!')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        alert("Congratulations! You found them all!")
        location.reload()
       

      }

     
    }

   

  createBoard()
})
