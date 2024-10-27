import { ParagraphProps } from "../../types/paragraphTypes"


const Paragraph = ({children, classes}: ParagraphProps) => {
  return (
    
    <p  className={classes}>{children}</p>
  )
}

export default Paragraph