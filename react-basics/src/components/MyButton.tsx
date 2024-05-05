interface Props {
    children: string
    color: string
    onClick: () => void
}



const myButton = ({children, color, onClick}: Props) => {
  return (
    <button type="button" className={color} onClick={onClick}>{children}</button>
  )
}

export default myButton