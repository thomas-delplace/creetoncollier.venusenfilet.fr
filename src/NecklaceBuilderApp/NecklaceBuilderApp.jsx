import { StepProvider } from './context/StepContext'
import { NecklaceProvider } from './context/NecklaceContext'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NecklaceBuilder from './assets/necklaceBuilder/NecklaceBuilder'
import { ServerResProvider } from './context/ServerResponseContext'

const NecklaceBuilderApp = () => {

  return (
    <StepProvider>
      <ServerResProvider>
        <NecklaceProvider>
          <NecklaceBuilder />
        </NecklaceProvider>
      </ServerResProvider>
    </StepProvider>
  )
}

export default NecklaceBuilderApp
