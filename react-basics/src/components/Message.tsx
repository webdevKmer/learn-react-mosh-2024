import { ReactNode } from "react"

interface Props{
  children: ReactNode
}

const Message = ({children}: Props) => {
  return (
    <div className="alert alert-info" role="alert">
      {children}
    </div>   
  )
}

export default Message