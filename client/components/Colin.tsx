import { useState, useEffect } from 'react'

function Colin({ gameState, topArtist, bottomArtist, isWelcome }) {
  const [imgSrc, setImgSrc] = useState<string>(
    'client/public/colingspeechbubble.png',
  )

  useEffect(() => {
    if (isWelcome === false) {
      setImgSrc('client/public/colingspeechbubble.png')
    } else if (gameState === 1) {
      setImgSrc('client/public/colingspeechbubble.png')
    } else if (gameState === 2) {
      setImgSrc('client/public/colingspeechbubble.png')
    }

    const timerId = setTimeout(() => {
      setImgSrc('client/public/idle.png')
    }, 5000)

    return () => clearTimeout(timerId)
  }, [gameState, isWelcome])

  //testing
  // console.log('gameState:', gameState)
  // console.log('imgSrc:', imgSrc)
  // console.log('colin isWelcome', isWelcome)
  // console.log('artistNames in Colin', topArtist)
  //
  const colinTips = [
    {
      tip1: `${bottomArtist}, close your eyes!`,
      tip2: `${topArtist}, draw me the top of the monster and then hit done when finished!`,
      hint: `Make sure you draw right the the bottom of the white canvas`,
    },
    {
      tip1: `${topArtist}, close your eyes!`,
      tip2: `${bottomArtist}, draw me the bottom of the monster and then hit done when finished!`,
      hint: `Make sure you draw right to the top of where ${topArtist}'s lines finish`,
    },
    {
      tip1: 'Dreadfully delightful!',
      tip2: `${topArtist} and ${bottomArtist} look at your marvelous creation!`,
      hint: 'Dont forget to name and save your creation!',
    },
  ]

  const currentColinTip = colinTips[gameState]
  console.log('colin gamestate', gameState)
  return (
    <>
      <div className="speech-bubble">
        <p>{currentColinTip.tip1}</p>
        <br />
        <p>{currentColinTip.tip2}</p>
        <br />
        <em>{currentColinTip.hint}</em>
      </div>

      <img className="colin-image" src={imgSrc} alt="colin" />
    </>
  )
}
export default Colin
