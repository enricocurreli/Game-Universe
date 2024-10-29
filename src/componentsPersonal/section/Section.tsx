import { useContext } from "react"
import { PageContext } from "../../context/PageContext"
import { SectionProps } from "../../types/sectionTypes"



const Section = ({children, classes, id}:SectionProps) => {


  const context = useContext(PageContext);

  if (!context) {
    throw new Error("YourComponent deve essere usato all'interno di PageContextProvider");
  }

  // Ora puoi accedere a context.scrolled senza errori
  const { scrolled} = context;

  return (
    <section className={classes} ref={scrolled} id={id}>
          {children}
    </section>
  )
}

export default Section