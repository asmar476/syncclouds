import PagesHero from "../common component/PagesHero"
import Layout from "../layout/Layout"
import ServicesCapibilities from "../pages-component/Services/ServicesCapibilities"


const Services = () => {
  return (
    <Layout>
    <div className='pb-20'>
    <PagesHero data={'Maintenance'} />
    </div>

      {/*/////////////////// Capabilities section //////////////////// */}
     {/* <ServicesCapibilities/> */}
    </Layout>
  )
}

export default Services