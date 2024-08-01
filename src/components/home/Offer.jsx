
import { OfferData } from '@/partials/ConstantData';
import CustomSlider from '@/partials/CustomSlider'
import Image from 'next/image';
import React from 'react'
import { useTranslation } from 'react-i18next';

function Offer({ id }) {
  const {t} = useTranslation();
  return (
    <div className='bg-[#F0F2F4] lg:px-[120px] xl:px-[120px] px-[20px] xl:pt-[20px] lg:pt-[20px] xl:pb-[60px] lg:pb-[60px] py-[20px] ' id={id} >

      <div className='flex justify-center items-center relative'>
        <h2 className='service_text font-semibold xl:text-[64px] lg:text-[64px] text-[28px] '>{t('service')}</h2>
        <h2 className='xl:text-[48px] lg:text-[48px]  absolute xl:top-9 lg:top-9 md:top-5 top-3 text-[24px] font-semibold xl:leading-[56px] lg:leading-[56px]'>{t('whatOffer')}</h2>
      </div>
      {/*Carusel  */}
      <div className='xl:pt-[40px] lg:pt-[40px] pt-[10px]'>
        <CustomSlider>
          {
            OfferData?.map((list, i) => (
              <div className='group' key={i}>
                <div className='border relative xl:h-[120px] overflow-auto lg:h-[120px] h-[120px] group-hover:bg-offerbg bg-center duration-200 bg-white mb-10 border-gray-200 cursor-pointer lg:mx-2 xl:mx-2 mx-1  rounded-lg sliderImg'>
                  <div className='absolute left-3 -top-3  '>
                    <Image src={list?.img} alt="" className='object-cover  rounded-full w-[60px] h-[60px]  transition-transform duration-300 transform group-hover:scale-125' width={89} height={89} />
                  </div>
                  <div className={` pt-[75px] xl:pb-auto lg:pt-auto pb-3 pl-3 pr-1`}>
                    <p className='lg:text-[18px] xl:text-[18px] text-[16px] transition-transform delay-150 transform group-hover:-translate-y-1 group-hover:text-white font-semibold leading-5'>{t(list?.heading)}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </CustomSlider>
      </div>
    </div>
  )
}

export default Offer