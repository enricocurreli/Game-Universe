import { SectionProps } from "../../types/sectionTypes"


const Article = ({children, classes}: SectionProps) => {
  return (
    <article className={classes}> {children}</article>
  )
}

export default Article