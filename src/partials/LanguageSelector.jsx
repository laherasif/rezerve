"use client"

import React, { useState, useRef, useEffect } from 'react';
import Transition from '@/partials/Transition';
import { IoMdArrowDropdown } from 'react-icons/io'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '@/app/i18nConfig';
import { useTranslation } from "react-i18next";

function LanguageSelector() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const trigger = useRef(null);
    const dropdown = useRef(null);


    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
  
    const handleChange = React.useCallback(
      (newLocale) => () => {
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
        if (currentLocale === i18nConfig.defaultLocale) {
          router.push('/' + newLocale + currentPathname);
        } else {
          router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        }
        router.refresh();
      },
      [currentLocale, currentPathname, router],
    );


    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });


    return (
        <div className="relative">
            <button
                ref={trigger}
                style={{padding:'9px'}}
                className={` px-2  h-full w-full  flex  flex-col justify-between rounded-md   bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600`}
                aria-label="Select date range"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >

                <div className='flex '>
                    <span className="flex items-center text-[#707070]">
                        <span className='text-[16px]'>
                            {currentLocale === "pl" ?
                                <Image src={"/pl.png"} alt="" width={20} height={20} />
                                :
                                <Image src={"/us.png"} alt="" width={20} height={20} />
                            } 
                        </span>
                    </span>
                    <IoMdArrowDropdown className={`text-[25px] `} />
                </div>
            </button>
            <Transition
                show={dropdownOpen}
                tag="div"
                className="z-10 absolute top-full right-0 w-full p-1   bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                enter="transition ease-out duration-100 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <div
                    ref={dropdown}
                    className="font-medium text-sm text-slate-600 "
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                >
                    {currentLocale === "pl" ?
                        <button
                            tabIndex="0"
                            className={`flex items-center justify-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer`}
                            onClick={handleChange("en")}
                        >
                            <Image src={"/us.png"} alt="us" width={20} height={20} />
                        </button>
                        :
                        <button
                            tabIndex="0"
                            className={`flex items-center justify-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer`}
                            onClick={handleChange("pl")}
                        >
                             <Image src={"/pl.png"} alt="pl" width={20} height={20}  />
                        </button>
                    }
                </div>
            </Transition>
        </div>
    );
}

export default LanguageSelector;


