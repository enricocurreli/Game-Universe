import { ImgProps } from "../../types/imgTypes"


const Img = ({classes, src, alt}: ImgProps) => {
  
    return <img className={classes} src={src} alt={alt} />
}

export default Img