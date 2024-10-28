import { useContext } from "react"
import { PageContext } from "../../context/PageContext"
import { SectionProps } from "../../types/sectionTypes"



const Section = ({children, classes, id}:SectionProps) => {

  const {scrolled} = useContext(PageContext)
 

  return (
    <section className={classes} ref={scrolled} id={id}>
          {children}
    </section>
  )
}

export default Section