import React from 'react'
import { ChooseData } from '@/partials/ConstantData'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
function Choose({ id }) {
  const { t } = useTranslation();
  return (
    <div className=' bg-choosebg bg-right bg-cover'>
      <div className=' lg:px-[120px] xl:px-[120px] px-[20px] xl:pt-[10px] xl:pb-[60px] lg:pb-[60px] lg:pt-[10px] py-[20px] ' id={id}>
        <div className='flex justify-center items-center relative'>
          <div className=''>
            <h2 className='service_text font-semibold xl:text-[64px] lg:text-[64px] text-[28px] '>{t('features')}</h2>
          </div>
          <h2 className='xl:text-[48px] lg:text-[48px] absolute xl:top-8 lg:top-8 md:top-2 top-2 text-[24px] font-semibold xl:leading-[56px] lg:leading-[56px]'>{t('whyChoose')}</h2>

        </div>

        <div className='grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 xl:pt-[48px] lg:pt-[48px] pt-[16px]'>
          {ChooseData?.map((list, i) => (
            <div className='bg-[#F9F9F9] p-[16px] rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ease-in-out' key={i}>
              <div className='flex gap-2'>
                <div className='w-[15%] '>
                  <Image
                    src={list?.img}
                    alt="icons_img"
                    width={40}
                    height={40}
                    className='lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px] w-[32px] h-[32px]'
                  />
                </div>
                <div className='w-full'>
                  <h2 className='xl:text-[22px] lg:text-[22px] text-[21px] font-semibold'>{t(list?.heading)}</h2>
                  <p className='text-[14px] text-[#84878A] font-normal leading-[19px]'>{t(list?.subHeading)}</p>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}

export default Choose