import Message from './components/Message'
import ListGroup from './components/ListGroup'

function App() {
  const capitals = [
    "Paris", "Yaounde", "Bamako", "Dakar", "Abidjan"
]
  const heading = "Capitales du monde"
  
  return (
    <>
      <ListGroup items={capitals} heading={heading}/>
      <hr />
      <Message />
    </>
  )
}

export default App
