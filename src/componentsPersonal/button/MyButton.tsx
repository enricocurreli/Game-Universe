import { ButtonProps } from "../../types/buttonTypes";

const MyButton = ({children, click, classes, type, disabled}: ButtonProps) => {

  
  
  return (
    
    <button className={"btn " + classes}  onClick={click} type={type} disabled={disabled}> {children}</button>

  )
}

export default MyButton;

