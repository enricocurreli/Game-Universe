import { useContext } from "react"
import { PageContext } from "../../context/PageContext"
import { SectionProps } from "../../types/sectionTypes"



const Section = ({children, classes}:SectionProps) => {

  const {scrolled} = useContext(PageContext)
 

  return (
    <section className={classes} ref={scrolled}>
          {children}
    </section>
  )
}

export default Section