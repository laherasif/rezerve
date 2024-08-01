import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useTranslation } from 'react-i18next';
import { RiSendPlaneFill } from 'react-icons/ri';

function MobileFooter({setEmail , setShow}) {
    const {t} = useTranslation()
    const schema = yup.object().shape({
        email: yup.string().required(t('email')),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
    
    const OnSubmit = async (data) => {
        setShow(true)
        setEmail(data?.email)
    }
    
    return (
        <div>
            {/* Mobile */}
            <div className='bg-servicebg bg-cover bg-no-repeat bg-center xl:hidden lg:hidden block'>
                <div className='join bg-opacity-[0.5] w-full h-full'>
                    <div className='lg:pl-[120px] xl:pl-[120px] px-[20px] py-[30px] '>
                        <h2 suppressHydrationWarning className='xl:text-[48px] lg:text-[48px] text-[24px] font-semibold'>{t('joinWait')}</h2>
                        <p className='text-[16px] font-normal text-[#616365]' suppressHydrationWarning>
                        {t('joinToShort')}</p>
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
        </div>
    )
}

export default MobileFooter