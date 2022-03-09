import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'
import Card from '../components/card/Card'
import SectionBreak from '../components/sectionbreak/SectionBreak'
import ContactForm from '../components/contactform/ContactForm'

function Home()
{
  return (
  <Layout>
    <title>Who is this guy? smh</title>
    <Hero
    heading = "I honestly don't know who I am"
    subHeading = "Here's some cool stuff I did"
    buttonText = "Learn more"
    bgImage = "/bgGif.gif"
    />
    <SectionBreak />
    <h2>Projects</h2>
    <div className="flex justify-space-evenly flex-wrap">
    <Card
      image="/project.jpeg"
      alt="a cool project"
      title="Cool Project"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
      buttonText="Learn More"
      buttonLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
    <Card
      image="/project.jpeg"
      alt="a cool project"
      title="Cool Project"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
      buttonText="Learn More"
      buttonLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
    <Card
      image="/project.jpeg"
      alt="a cool project"
      title="Cool Project"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
      buttonText="Learn More"
      buttonLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
    </div>
    <ContactForm/>
  </Layout>
  )
}

export default Home