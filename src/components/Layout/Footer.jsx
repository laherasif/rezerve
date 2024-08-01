"use client"
import React, { useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import DynamicPopup from '@/partials/DynamicPopup';
import AfterSignUp from '@/components/home/AfterSignUp';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Image from 'next/image';
import MobileFooter from './MobileFooter';

function Footer() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const { t } = useTranslation()
    const schema = yup.object().shape({
        email: yup.string().required(t('email')),
    })
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    const OnSubmit = async (data) => {
        setShow(true)
        setEmail(data?.email)
        reset()
    }


    return (
        <>
            {
                show && <DynamicPopup modalOpen={show} data={<AfterSignUp email={email} />} close={() => setShow(false)} />

            }
            <div className='w-full ' id="joinUs">
                <div className='bg-joinUsbg bg-cover bg-center h-full py-[60px] xl:block lg:block md:block hidden'>
                    <div className=' w-full  top-0 h-full '>
                        <div className=' lg:pl-[120px] xl:pl-[120px] pl-[20px] xl:block lg:block hidden'>
                            <h2 suppressHydrationWarning className='xl:text-[48px] lg:text-[48px] text-[24px] font-semibold max-w-[450px] pt-4 leading-10'>{t('joinWait')}</h2>
                            <p className='text-[16px] font-normal text-[#616365] max-w-[500px] pt-[24px]' suppressHydrationWarning>{t('joinToShort')}</p>
                            <form onSubmit={handleSubmit(OnSubmit)}>
                                <div className='border border-[#A9ADB0] px-2 rounded-md flex items-center w-[330px] h-[50px] mt-[16px]'>
                                    <input type="email" {...register('email')} className=' bg-transparent h-full focus:outline-none w-full px-2' name="email" suppressHydrationWarning placeholder={t('emailEnter')} />
                                    <button type='submit' className='bg-[#176B87] rounded-md gap-3 px-4 py-1.5 text-white flex items-center '>
                                        <p suppressHydrationWarning>{t('send')}</p>
                                        <RiSendPlaneFill />
                                    </button>
                                </div>
                                {errors.email && (
                                    <span className='text-red-500 text-sm '>{errors.email.message}</span>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                <div className='xl:hidden lg:hidden block'>
                    <MobileFooter setShow={setShow} setEmail={setEmail} />
                </div>


                {/* Bottom Footer Links */}
                <div className='bg-white lg:px-[120px] xl:px-[120px] px-[20px] xl:py-[16px] lg:py-[16px] py-[10px] '>
                    <div className='flex lg:flex-nowrap xl:flex-nowrap flex-wrap justify-between items-center'>
                        <div className=''>
                            <p suppressHydrationWarning className='text-[#616365] text-[16px] font-normal'>{t('copyRight')}</p>
                        </div>
                        <div className='flex lg:justify-center lg:items-center xl:justify-center xl:items-center'>
                            <p className='text-[#616365] text-[16px] font-normal'>{t('query')} <span className='text-[#176B87]'>{t('queryEmail')}</span></p>
                        </div>
                        <div className='flex lg:flex-row xl:flex-row  flex-wrap justify-center  xl:justify-between lg:justify-between items-center  gap-4 '>
                            <div className='flex items-start xl:w-auto lg:w-auto w-full justify-between gap-2'>
                                <p className='text-[#616365] text-[16px] font-normal'>{t('privacy')}</p>
                                <p className='text-[#616365] text-[16px] font-normal'>{t('terms')}</p>
                            </div>
                            <div className='flex justify-between items-center gap-4'>
                                <a href='https://www.instagram.com/rezerve.pl?igsh=cjlsdDAwOXV6Nmlp&utm_source=qr' target='_blank'>
                                    <Image src={'/Frame 1000003790.svg'} width={35} height={35} alt="insta" />
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=61557559317957' target='_blank'>
                                    <Image src={'/Frame 1000003791.svg'} width={35} height={35} alt="insta" />
                                </a>
                                <a href='https://twitter.com/rezervepl' target='_blank'>
                                    <Image src={'/Frame 1000003792.svg'} width={35} height={35} alt="insta" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
