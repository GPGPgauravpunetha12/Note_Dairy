import React, { useState } from 'react'
import NoteDiary from './NoteDiary' // Assuming NoteDiary is your component to render after authentication
import { GlobalStyle, ButtonSpan } from './styles'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [pin, setPin] = useState('')
  const correctPin = '1234' // Change this to your desired pin

  const handlePinChange = (e) => {
    setPin(e.target.value)
  }

  const handleAuthentication = () => {
    if (pin === correctPin) {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
      alert('Wrong pin. Please try again.')
    }
  }

  return (
    <>
      <GlobalStyle />
      <div
        className="container"
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '400px',
          margin: 'auto'
        }}
      >
        {!authenticated ? (
          <>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
              Welcome to Memory Vault
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '10px' }}>
              Let's get started by entering your pin:
            </p>
            <input
              type="password"
              value={pin}
              onChange={handlePinChange}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: '1px solid white',
                backgroundColor: 'transparent',
                color: 'white'
              }}
            />
            <button
              onClick={handleAuthentication}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid white',
                backgroundColor: 'transparent',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Authenticate
            </button>
          </>
        ) : (
          <NoteDiary />
        )}
      </div>
    </>
  )
}

export default App
