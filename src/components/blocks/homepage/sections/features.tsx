import Image from 'next/image';
import React from 'react';
import caretaker from '@/assets/images/services/caretaker.svg';

export const Features = () => {
  return (
    <section className='py-24'>
      <div className='container px-4 lg:px-8'>
        <div className='min-h-[600px] w-full space-y-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl leading-tight tracking-tight sm:text-4xl '>
              Accessible Care for a Balanced Life
            </h2>
            <p className='mt-4 text-base sm:text-xl text-muted-foreground font-light'>
              Whether you need companionship for a loved one, assistance with
              errands, or help managing your health needs, Kuruwaa is here to
              make your life easier.
            </p>
          </div>

          <div className='flex gap-12 h-fit items-center justify-center flex-wrap lg:flex-nowrap'>
            <Image src={caretaker} alt='Kuruwaa Caretaker' className='' />
            <div className='text-center lg:text-start text-balance lg:text-pretty lg:max-w-xl space-y-4'>
              <p className='text-xl md:text-2xl '>
                On-Demand Caretakers - Your Trusted Support Network
              </p>
              <p className='md:text-lg font-light'>
                Kuruwaa connects you with compassionate and qualified on-demand
                caretakers who can provide essential support throughout your or
                your loved ones&apos; hospital stay.
              </p>
              <p className='md:text-lg font-light'>
                Our caretakers provide{' '}
                <strong className='font-medium'>
                  companionship, emotional support, and practical assistance
                </strong>{' '}
                during the hospital stay, helping you feel more comfortable,
                informed, and supported.
              </p>
              <p className='md:text-lg font-light'>
                Focus on recovery, not distance. Our caretakers bridge the gap,
                providing the presence your loved ones need during
                hospitalization.
              </p>
            </div>
          </div>
          {/* <div className='flex justify-center flex-wrap'>
            <div className='basis-full mb-3 text-center'>
              <p className='text-2xl'>How to book a Kuruwaa?</p>
            </div>
            <div className='basis-full sm:basis-1/2 md:basis-1/3 pt-3 flex xl:basis-1/5 pr-3'>
              <div className='px-5 py-3 border w-full rounded-lg'>
                <p className='text-lg font-semibold'>Step 1</p>
                <p className=''>Open Kuruwaa App</p>
              </div>
            </div>
            <div className='basis-full sm:basis-1/2 md:basis-1/3 pt-3 flex xl:basis-1/5 pr-3'>
              <div className='px-5 py-3 border w-full rounded-lg '>
                <p className='text-lg font-semibold'>Step 1</p>
                <p className=''>Select your Hospital</p>
              </div>
            </div>
            <div className='basis-full sm:basis-1/2 md:basis-1/3 pt-3 flex xl:basis-1/5 pr-3'>
              <div className='px-5 py-3 border w-full rounded-lg '>
                <p className='text-lg font-semibold'>Step 1</p>
                <p className=''>Select the Dates and Time</p>
              </div>
            </div>
            <div className='basis-full sm:basis-1/2 md:basis-1/3 pt-3 flex xl:basis-1/5 pr-3'>
              <div className='px-5 py-3 border w-full rounded-lg '>
                <p className='text-lg font-semibold'>Step 1</p>
                <p className=''>Confirm Booking and Payment</p>
              </div>
            </div>
            <div className='basis-full sm:basis-1/2 md:basis-1/3 pt-3 flex xl:basis-1/5'>
              <div className='px-5 py-3 border w-full rounded-lg '>
                <p className='text-lg font-semibold'>Step 1</p>
                <p className=''>
                  Congratulations, your Kuruwaa will arrive shortly.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
