'use client';

import React from 'react';
import Banner from '@/components/home/Banner';
import Offer from '@/components/home/Offer';
import Choose from '@/components/home/Choose';
import Information from '@/components/home/Information';
import WhoWe from '@/components/home/WhoWe';
export default function Home() {
  return (
    <div className='overflow-hidden min-h-screen'>
      <Banner/>
      <Offer id="service" />
      <Choose id="feature" />
      <Information id="forSellers" />
      <WhoWe /> 
    </div>

  );
}