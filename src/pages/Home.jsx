import Bestseller from '../components/Bestseller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsLetterBox from '../components/NewsLetterBox'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home