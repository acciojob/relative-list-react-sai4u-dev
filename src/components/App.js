import React from 'react'

const App = () => {
  const relativeList = ["Chacha", "Chachi", "Bua", "Mashi", "Tau"]
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key={relativeList}>
        {relativeList.map((item, index) => {
          return <li key={`relativeListItem${index + 1}`}>{item}</li>
        })}
      </ol>
    </div>
  )
}

export default App