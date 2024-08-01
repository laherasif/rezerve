"use client"

// import Hero from '../../assets/hero.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { ScrollWeb } from '@/components/GenericData/Scroller'
import { HiOutlineBars3 } from "react-icons/hi2";
import Sidebar from '@/components/Layout/Sidebar'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image';
import LanguageSelector from "@/partials/LanguageSelector";
function Banner() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex justify-between pb-[90px] relative w-full '>
        <div className='xl:pl-[120px] lg:pl-[120px]  relative'>
          {/* Header Section */}
          <div>
            <div className='flex  items-center gap-[24px] xl:h-[96px] lg:h-[96px] h-[76px] xl:shadow-none lg:shadow-none md:shadow-none shadow-md xl:bg-transparent lg:bg-transparent md:bg-transparent   bg-white z-30 xl:pl-0 lg:pl-0 pl-[20px] lg:relative xl:relative fixed w-full'>
              <div className='xl:hidden lg:hidden md:hidden flex justify-between items-center gap-[52px] w-full'>
                <div className=''>
                  <HiOutlineBars3 size={30} onClick={() => setSidebarOpen(true)} />
                </div>
                <div className='w-full'>
                  <Image src={'/NewLogo.svg'} className='object-cover' width={187} height={50} alt="logo" />
                </div>
                <div className='w-[48%]'>
                  <LanguageSelector />
                </div>
              </div>
              <div className='xl:block lg:block md:block hidden'>
                <Image src={'/NewLogo.svg'} className='object-cover ' width={210} height={50} alt="logo" />
              </div>
              <ul className=' items-center gap-[24px] cursor-pointer text-[16px] font-normal xl:flex lg:flex md:flex hidden '>
                <li>
                  <ScrollWeb to="service">{t('service')}</ScrollWeb>
                </li>
                <li>
                  <ScrollWeb to="feature">{t('features')}</ScrollWeb>
                </li>
                <li>
                  <ScrollWeb to="forSellers">{t('forSellon')}</ScrollWeb>
                </li>
                <li>
                  <ScrollWeb to="joinUs">{t('joinUs')}</ScrollWeb>
                </li>
              </ul>
            </div>
            {/* Hero Section */}
            <div className='xl:pt-[100px] lg:pt-[100px] pt-[100px]  xl:pl-0 lg:pl-0 pl-[20px] '>
              <div className=''>
                <h2 className='lg:text-[40px] xl:text-[40px] text-[24px] font-semibold xl:leading-10 lg:leading-10 leading-6'>{t('findService')}
                  <br />
                  <span className='text-[#176B87]'></span> {t('bookAppoint')}</h2>
                <p className='text-[#84878A] font-normal lg:text-[20px] xl:text-[20px]  text-[18px] leading-[23px] max-w-[437px] pt-[24px]'>{t('Rezerve')}</p>
                <ScrollWeb to="joinUs">
                  <div className='flex group hover:bg-[#176B87] delay-150 text-[#176B87] hover:text-white cursor-pointer border-[#176B87] items-center gap-2 mt-[24px] border-[2px] rounded-full w-max px-5 h-[48px]'>
                    {/* <span>{t('joinWait')}</span> */}
                    <FaArrowRightLong className='transition-transform delay-150 transform group-hover:translate-x-2' />
                  </div>
                </ScrollWeb>

                <div className='pt-[16px] xl:hidden lg:hidden block mobile_hero '>
                  <Image src={ currentLocale === "en" ? "/hero-hq.png": "/hero-pl-new.png"} width={393} height={370} alt="phone" />
                  {/* <img src={lng === "en" ? phoneNew : phonePl} className='object-contain' width={393} height={370} /> */}
                </div>

                <div className=' pt-[24px]'>
                  <h2 className='text-[20px] font-semibold '>{t('didYou')}</h2>
                  <div className='grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4 max-w-[618px]'>
                    <div className='max-w-[190px] xl:border-r lg:border-r '>
                      <h2 className='text-[#176B87] opacity-[0.5] text-[56px] font-semibold '>50%</h2>
                      <p className='leading-[17px] text-[16px] font-normal'>{t('ofSalon')}</p>
                    </div>
                    <div className='max-w-[190px] xl:border-r lg:border-r '>
                      <h2 className='text-[#176B87] opacity-[0.5] text-[56px] font-semibold '>80%</h2>
                      <p className='leading-[17px] text-[16px] font-normal'>{t('salonClient')}</p>
                    </div>
                    <div className='max-w-[190px]'>
                      <h2 className='text-[#176B87] opacity-[0.5] text-[56px] font-semibold '>90%</h2>
                      <p className='leading-[17px] text-[16px] font-normal'>{t('onlineBooking')}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=''>

            {/* Hero Section */}
            <div className='xl:flex lg:flex  md:flex  justify-end items-end hidden'>
              <div className='absolute -top-20 bottom-0 -right-[12.2%] 3xl:border 3xl:-right-[10%]'>
                <Image src={'/hero.svg'} width={780} height={780} className='object-cover ' alt="logo" />
              </div>
            </div>

            <div className='h-[96px]  absolute right-2  items-center pr-[120px] xl:flex lg:flex md:flex hidden'>
              <ul className='flex items-center gap-[12px] text-[16px] font-normal '>
                <li className=''>
                  <div href="" target="_blank"
                    className="flex items-center cursor-pointer  justify-center w-full  px-2 text-center text-white bg-white rounded "
                    rel="noreferrer">
                    <svg className="w-5" viewBox="-9 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                          fill="#FFD900"></path>
                        <path
                          d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                          fill="#F43249"></path>
                        <path
                          d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                          fill="#00EE76"></path>
                        <path
                          d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                          fill="#00D3FF"></path>
                      </g>
                    </svg>
                    <div className="flex flex-col ml-1 py-1 text-left ">
                      <span className="text-[10px] text-black">{t('comingSoon')}</span>
                      <span className="text-base font-normal leading-3  text-black">
                        Google Play
                      </span>
                    </div>
                  </div>
                </li>
                <li className=''>
                  {/* <Image src={GoogleApp} className='object-contain' width={120} height={43} /> */}
                  <div
                    target="_blank"
                    className="flex items-center cursor-pointer justify-center w-full px-2  text-center text-white bg-white rounded  md:w-auto"
                    rel="noreferrer">
                    <svg className="w-5" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                        <path
                          d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                          fill="black"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="40" height="45" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col ml-2 py-1 text-left">
                      <span className="text-[10px] text-black">{t('comingSoon')}</span>
                      <span className="text-base leading-3 font-normal text-black">
                        App Store
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <LanguageSelector />
                </li>
              </ul>
            </div>
            <div className='absolute right-[6%] top-[20%] xl:block lg:block hidden phone_mock'>
              <Image src={ currentLocale === "en" ? '/hero-hq.png' : '/hero-pl-new.png'} width={540} height={500} className='object-cover ' alt="logo" />
              {/* <img src={lng === "en" ? phoneNew : phonePl} className='object-cover' width={540} height={500} /> */}
            </div>
          </div>
        </div>
      </div >
    </>

  )
}

export default Banner