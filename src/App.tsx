import React from 'react'
import Button from './components/shared/Button'
import Text from './components/shared/Text'
import { useAlertContext } from '@contexts/AlertContext'
import TextField from './components/shared/TextField'
import Alert from './components/shared/Alert'

function App() {
  const { open } = useAlertContext()
  return (
    <div>
      <TextField label="아이디" hasError={true} />

      {/* <Alert open={true} title="테스트" onButtonClick={() => {}} /> */}

      <Button
        onClick={() => {
          open({
            title: '테스트',
            description: '안녕하세요.',
            onButtonClick: () => {},
          })
        }}
      >
        눌러보세요.
      </Button>
    </div>
  )
}

export default App
