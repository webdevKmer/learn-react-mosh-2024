import Message from './components/Message'
import MyButton from './components/MyButton'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import { useState } from 'react'

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  const capitals = [
    "Paris", "Yaounde", "Bamako", "Dakar", "Abidjan"
]
  const heading = "Capitales du monde"

  const handleSelectedItem = (item: string) => {
    console.log(item);    
  }
  const handleClose = () => {
    setAlertVisibility(false)
  }
  return (
    <>
      <MyButton color='btn btn-primary' onClick={() => setAlertVisibility(true)
      }>React</MyButton>
      {alertVisible && <Alert onClose={handleClose}>All components were loaded!</Alert>}
      
      <ListGroup items={capitals} heading={heading} onSelectItem={handleSelectedItem}/>
      <hr />
      <Message>
        Hallo <strong>Maman</strong>, ici <strong> bebe</strong>!
      </Message>
    </>
  )
}

export default App
