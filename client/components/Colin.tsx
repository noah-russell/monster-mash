function Colin({ gameState }) {
  const artistOne = 'Michael'
  const artistTwo = 'Gaby'

  const colinTips = [
    {
      tip1: `${artistTwo}, close your eyes!`,
      tip2: `${artistOne}, draw me the top of the monster and then hit done when finished!`,
      hint: `Make sure you draw right the the bottom of the white canvas`,
    },
    {
      tip1: `${artistOne}, close your eyes!`,
      tip2: `${artistTwo}, draw me the bottom of the monster and then hit done when finished!`,
      hint: `Make sure you draw right to the top of where Artist One's lines finish`,
    },
    {
      tip1: 'Dreadfully delightful!',
      tip2: `${artistOne} and ${artistTwo} look at your marvelous creation!`,
      hint: 'Dont forget to name and save your creation!',
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

      <img className="colin-image" src="client/public/colin.png" alt="colin" />
    </>
  )
}
export default Colin
