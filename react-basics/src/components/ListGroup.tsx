import { useState } from "react"

interface Props {
    items: string[],
    heading: string
}


const ListGroup = ({items, heading}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
    <h2>{heading}</h2>
    {items.length === 0 ?
        <h5>La liste est vide!</h5> :
        <ul className="list-group">
            {items.map((capital, index) => <li key={capital} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onClick={() => {
                setSelectedIndex(index)
            }
            }>{capital}</li>)}        
        </ul>
    }
    </>
  )
}

export default ListGroup