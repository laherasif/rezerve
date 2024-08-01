import React from 'react'
// import ServiceInfo from '../../assets'
import { ChooseDataSellon } from '@/partials/ConstantData'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel'
import Image from 'next/image'
function Information({ id }) {
  const { t } = useTranslation();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className='information lg:px-[120px] xl:px-[120px] px-[20px] xl:py-[10px] lg:py-[10px] xl:pb-[40px] lg:pb-[40px] py-[20px] ' id={id}>

      <div className='flex justify-center items-center relative'>
        <div className=''>
          <h2 className='service_text font-semibold xl:text-[64px] lg:text-[64px] text-[28px] '>{t('features')}</h2>
        </div>
        <h2 className='xl:text-[48px] lg:text-[48px] text-white absolute xl:top-8 lg:top-8 md:top-3 top-3 text-[24px] font-semibold xl:leading-[56px] lg:leading-[56px]'>{t('information')}</h2>
      </div>
      <div className='grid xl:grid-cols-2  lg:grid-cols-2 grid-cols-1 gap-10 pt-[48px]'>
        {/* <Image src={Service} width={612} height={383} alt="service_pic" /> */}
          <div className='xl:mt-32 lg:mt-32'>
            <Carousel
              responsive={responsive}
              containerClass=" "
              showDots={false}
              autoPlay={true}
              autoPlaySpeed={2000}
              arrows={false}
              infinite
            >
               <div className='flex flex-col xl:pr-0 lg:pr-0 pr-2 xl:pl-2 lg:pl-2 gap-1.5 '>
                <Image src={'/Rectangle 32.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/Rectangle 33.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl ' alt="service_pic" />
              </div>
              <div className='flex flex-col pt-10  xl:pl-2 lg:pl-2 gap-1.5 '>
                <Image src={'/Rectangle 35.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/Rectangle 36.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl ' alt="service_pic" />
              </div>
              <div className='flex flex-col  xl:pl-2 lg:pl-2 pl-2 gap-1.5'>
                <Image src={'/Rectangle 37.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/Rectangle 38.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
              </div>
              <div className='flex flex-col  pt-10 xl:pl-2 lg:pl-2 pl-2 gap-1.5'>
                <Image src={'/Rectangle 39.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/Rectangle 40.svg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
              </div>
              <div className='flex flex-col  xl:pl-2 lg:pl-2 pl-2 gap-1.5'>
                <Image src={'/hair1.jpg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/hair2.jpg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
              </div>
              <div className='flex flex-col pt-10 xl:pl-2 lg:pl-2 pl-2 gap-1.5'>
                <Image src={'/hair3.jpg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/hair4.jpg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
              </div>
              <div className='flex flex-col   xl:pl-2 lg:pl-2 pl-2 gap-1.5'>
                <Image src={'/hair5.jpg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/hair6.jpg'} width={120} height={120} className='w-[120px]  h-full rounded-2xl' alt="service_pic" />
              </div>
              <div className='flex flex-col pt-10 xl:pr-0 lg:pr-0 pr-2 xl:pl-2 lg:pl-2 pl-2 gap-1.5'>
                <Image src={'/hair4.jpg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
                <Image src={'/hair2.jpg'} width={120} height={120} className='w-[120px] h-full rounded-2xl' alt="service_pic" />
              </div>

            </Carousel>
          </div>
        <div>
          {ChooseDataSellon?.map((list, i) => (
            <div className=' cursor-pointer ' key={i}>
              <div className='flex items-start gap-2 mb-3'>
                <div className='lg:w-[12%] xl:w-[12%] w-[20%] md:w-[10%]  xl:block lg:block md:block '>
                  <Image
                    src={"/ServiceInfo.svg"}
                    height={80}
                    width={80}
                    alt="service Info"
                    className='lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px] w-[80px] h-[80px]'
                  />
                </div>
                <div className='flex flex-col w-full '>
                  <h2 className='text-[20px] text-white  font-semibold'>{t(list?.heading)}</h2>
                  <p className='text-[14px] text-white font-normal pt-[8px] leading-[19px]'>{t(list?.subHeading)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Information
