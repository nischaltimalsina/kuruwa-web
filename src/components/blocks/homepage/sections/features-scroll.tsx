import Marquee from '@/lib/marqee';
import React from 'react';

export const FeaturesScroll = () => {
  return (
    <section className='border-y border-dashed border-primary'>
      <div className=' flex justify-between gap-12 py-4 text-xl font-light'>
        <Marquee speed={60} pauseOnHover className='cursor-pointer'>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap text-primary px-8 py-4'>
            On-demand caretakers
          </p>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap px-8 py-4'>
            Subscription plans
          </p>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap px-8 py-4'>
            Medical checkups
          </p>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap px-8 py-4'>
            Medication delivery
          </p>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap px-8 py-4'>
            Insurance guidance
          </p>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap px-8 py-4'>
            Expert support
          </p>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap px-8 py-4'>
            Educational resources
          </p>
          <p className=' flex gap-2 items-center leading-none whitespace-nowrap px-6 py-4'>
            Peace of mind
          </p>
        </Marquee>
      </div>
    </section>
  );
};
