import React from 'react'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
function WhoWe() {

  const { t } = useTranslation();
  const whoWeDesc = t('whoWeDesc');
  const Vission = t('missionvalueDesc');
  return (
    <div className='bg-white lg:px-[120px] xl:px-[120px] px-[20px] xl:py-[60px] lg:py-[60px] py-[20px] ' >
      <div className='flex xl:flex xl:flex-nowrap md:flex-nowrap lg:flex-nowrap flex-wrap justify-between items-center gap-10'>
        <div className=' w-full'>
          <h2 className='text-[24px] font-semibold '>{t('whoWe')}</h2>
          <p className='text-[#616365] font-normal text-[20px] leading-[24px] pt-[16px]'>
            {whoWeDesc.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className='w-full xl:pt-auto lg:pt-auto'>
          <Image
            src={'/mission.svg'}
            width={612}
            height={383}
            className='object-cover'
            alt="who_we"
          />
        </div>
      </div>
      <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap  justify-between items-center gap-10 pt-[48px]'>
        <div className='w-full  lg:order-1 xl:order-1 md:order-1 order-2'>
          <Image
            src={'/Misson and Values.jpeg'}
            width={300}
            height={383}
            className='object-cover w-[600px] h-[383px]'
            alt="who_we"
          />
        </div>
        <div className=' w-full lg:order-2 xl:order-2 order-1'>
          <h2 className='text-[24px] font-semibold '>{t('missionValue')}</h2>
          <p className='text-[#616365] font-normal text-[20px] leading-[24px] pt-[16px]'>
            {Vission.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

      </div>
    </div>
  )
}

export default WhoWe