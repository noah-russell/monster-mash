import { useState, useEffect } from 'react'
import { ColinProps } from '../../models/monster-models'

function Colin({ topArtist, bottomArtist, gameState }: ColinProps) {
  const [imgSrc, setImgSrc] = useState<string>('/idle.png')
  const [selectedColinPhrase, setSelectedColinPhrase] = useState<string>('')

  useEffect(() => {
    setSelectedColinPhrase(
      colinPhrases[Math.floor(Math.random() * colinPhrases.length)],
    )
  }, [])

  useEffect(() => {
    if (gameState === 1 || 2 || 3) {
      setImgSrc('/colinspeechbubble.png')
    }

    const timerId = setTimeout(() => {
      setImgSrc('/idle.png')
    }, 5000)

    return () => clearTimeout(timerId)
  }, [gameState])

  const colinPhrases = [
    'Freakishly fantastic!',
    'Marvelously monstrous!',
    'Not sure what that is, but it certainly scares ME!',
    'A delectable, demonstratively, devious and duplicitous demon!',
    "Should it's face look like that?",
    "I hope that thing doesn't eat other monsters",
    "I'm gonna keep looking at you so I don't have to keep looking at THAT!",
    'Did that thing come out of a Graveyard?',
    'Fantastically ferocious!',
    'Wonderfully weird!',
    'Terrifically terrifying!',
    'Eerily enchanting!',
    'Bewitchingly bizarre!',
    'Spectacularly spooky!',
    'Mysteriously magical!',
    'Strangely sublime!',
  ]

  const colinTips = [
    {},
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
      tip1: `${selectedColinPhrase}`,
      tip2: `${topArtist} and ${bottomArtist}, look at your marvelous creation!`,
      hint: "Don't forget to name and save your monster!",
    },
  ]

  const currentColinTip = colinTips[gameState]

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
