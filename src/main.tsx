import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {FluentProvider, webLightTheme} from "@fluentui/react-components";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document
.getElementById('root')!)
.render(
  <StrictMode>
	  <FluentProvider theme={webLightTheme}>
		  <App />
	  </FluentProvider>
  </StrictMode>,
)
