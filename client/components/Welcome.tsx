function Welcome({setIsWelcome}) {
  return (
    <div className="welcome-container">
      <div className="welcome-flexbox hflex">
        <img
          src="client/public/colinwelcome.png"
          alt="colin waving"
          className="colin"
        />
        <div className="welcome-bubble">
          <h2>
            Greetings minion! I need you to make a scary new monster... Make
            sure you have a friend with you, it takes two to make a truly
            terrifying beast
          </h2>
        </div>
      </div>
      <button className="welcome" onClick={()=>{setIsWelcome(false)}}>
        <p>Start</p>
      </button>
    </div>
  )
}

export default Welcome
