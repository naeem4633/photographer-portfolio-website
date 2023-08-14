import React from 'react'
import Header from './Header'

const Category = ({name, cover, images}) => {
  return (
    <>
    <Header fixed={true} transparent={true}/>
    <section className='w-full'>
        <div className="w-full h-[100vh] flex flex-col bg-gray-800 justify-center" style={{ backgroundImage: `url(${cover})` }}>
            <div className='w-full flex flex-col text-center text-white justify-center'>
                <p className='text-8xl font-bold'>{name}</p>
            </div>
        </div>
        <div className='gap-3 grid grid-cols-3 p-3'>
        {images.map((image, index) => (
            // <img key={index} src={image.src} alt={`Image ${index}`} className='w-full border border-black h-80'/>
            <div className='w-full border border-black h-80 flex justify-center items-center'>
                <p className='text-center text-lg font-semibold'>{image}</p>
            </div>
        ))}
        </div>
    </section>
    </>
  )
}

export default Category
