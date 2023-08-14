import React from 'react'
import Header from './Header'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <Header fixed={false} transparent={false}/>
    <section className='w-full'>
        <div className='mx-auto w-1/2 flex flex-col space-y-4 p-4 my-20'>
            <p className='text-center font-bold clear-lefttext-gray-700 text-2xl text-gray-500'>John Doe</p>
            <p className='text-center text-4xl text-gray-600'>I've been doing this for a while. </p>
            <img src='../static/images/about-profile.jpg' className='w-full h-[60vh]'></img>
            <p className='mx-auto text-xl font-semibold text-gray-400 text-center px-8'>With a natural inclination for strategizing and creating impactful visual narratives, my photography consistently embodies elegance, 
            character, and a relatable essence. My aim is to portray clients as industry authorities, whether in branding, products, headshots, or capturing real-life moments. Drawing 
            from my extensive experience as a decorated Art Director, I seamlessly translate a client's vision into compelling visuals. Specializing in Brand Lifestyle, On-site and Studio 
            Photography, Product Showcasing, Culinary Art, Healthcare, and beyond, I bring decades of expertise to exceed client expectations and bring their visions to life.</p>
        </div>
        <div className='w-full flex flex-col bg-gray-100 space-y-6 py-10'>
            <p className='text-center font-bold text-gray-700 text-lg'>LET'S GO.</p>
            <div className='mx-auto w-3/5 grid grid-cols-3 gap-x-10 justify-items-center'>
                <div className='w-full flex flex-col space-y-2'>
                    <img className='mx-auto h-80 hover:opacity-90' src='../static/images/about-person.jpg'></img>
                    <p className='text-center font-bold text-xl'>People.</p>
                    <p className='text-center text-lg'>Whether executive headshot and location portrait, I love to bring out the essence of my subject; I need my client to project comfort, ease and sophistication.</p>
                </div>
                <div className='w-full flex flex-col space-y-2'>
                    <img className='mx-auto h-80 hover:opacity-90' src='../static/images/about-product.jpg'></img>
                    <p className='text-center font-bold text-xl'>Products.</p>
                    <p className='text-center text-lg'>Whether you require photography for digital or print, I photograph your product, location or staff using flagship tools of the industry to insure extraordinary detail and resolution.</p>
                </div>
                <div className='w-full flex flex-col space-y-2'>
                    <img className='mx-auto h-80 hover:opacity-90' src='../static/images/about-other.jpg'></img>
                    <p className='text-center font-bold text-xl'>Everything else.</p>
                    <p className='text-center text-lg'>In the field, at dusk or in a patient room...I capture the dynamic and emotional visual results your company requires.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
