import Title from '../title/Title'
import Paragraph from '../paragraph/Paragraph'
import ShimmerButton from '../../components/ui/shimmer-button'

const Hero = () => {
  return (
    <header className='hero_cst'>
        <div className='sm:w-3/4 ps-16 mt-14'>
          {/* <Title tag={'h1'} classes={'text-accent sm:text-3xl text-2xl font-bold pb-5'}>Gaming Zone</Title> */}
          <Title  tag={'h2'} classes={'sm:text-7xl text-5xl font-extrabold pb-8'}>Game On - Thrilling
          Challenges</Title>
          <Paragraph classes={'text-xl'}>Discover the games</Paragraph>
          <ShimmerButton className="shadow-2xl mt-7 hover:bg-base-200" background='rgba(47, 150, 21, 0.837)'>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg ">
        Join Now
        </span>
      </ShimmerButton>

        </div>
    </header>
  )
}

export default Hero