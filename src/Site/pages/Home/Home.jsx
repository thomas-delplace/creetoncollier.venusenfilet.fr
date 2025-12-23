import CollectionsSection from '../../assets/CollectionsSection/CollectionsSection'
import CustomizeSection from '../../assets/CustomizeSection/CustomizeSection'
import Hero from '../../assets/hero/Hero'
import Page from '../../assets/page/Page'
import css from './Home.module.css'

const Home = () => {

  return (
    <Page>
      <Hero/>
      <CustomizeSection/>
      <CollectionsSection/>
    </Page>
  )
}
export default Home