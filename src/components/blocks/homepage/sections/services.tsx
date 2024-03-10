import React from 'react';
import care from '@/assets/images/care.jpg';
import plans from '@/assets/images/value.jpeg';
import deliver from '@/assets/images/athome.jpg';
import alltime from '@/assets/images/alltime.jpeg';
import dose from '@/assets/images/dosage.jpeg';
import know from '@/assets/images/educate.jpeg';
import Image from 'next/image';

export const Services = () => {
  return (
    <section id='services' className=''>
      <div className='container py-24'>
        <div className='min-h-[50vh] w-full space-y-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl leading-tight tracking-tight sm:text-4xl '>
              Your All-in-One Care Ecosystem
            </h2>
            <p className='mt-4 text-base sm:text-xl text-muted-foreground font-light'>
              Kuruwa goes beyond traditional healthcare, offering a
              comprehensive suite of services designed to empower you to manage
              your health and well-being, your way. Here&apos;s how we can help
              you thrive:
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            <div className='p-6 shadow-md rounded-lg space-y-5 text-pretty'>
              <p className='text-lg md:text-xl '>
                On-Demand Care, On Your Terms
              </p>
              <div className='h-56 w-full rounded-lg overflow-hidden'>
                <Image
                  placeholder='blur'
                  loading='lazy'
                  src={care}
                  alt=''
                  className='h-56 w-full object-cover rounded-lg hover:scale-125 duration-200'
                />
              </div>
              <p className='text-sm md:text-base font-light'>
                Connect with a network of qualified caretakers who can provide
                in-home and hospital support, tailored to your specific needs.
                Whether you require assistance with daily living activities,
                errands, or companionship during hospitalization, our on-demand
                service ensures you or your loved ones receive the care you
                deserve, whenever you need it most.
              </p>
            </div>
            <div className='p-6 bg-primary/10 shadow-md rounded-lg space-y-5 text-pretty'>
              <p className='text-lg md:text-xl '>
                Subscription Plans Tailored to You
              </p>
              <div className='h-56 w-full rounded-lg overflow-hidden'>
                <Image
                  placeholder='blur'
                  loading='lazy'
                  src={plans}
                  alt=''
                  className='h-56 w-full object-cover rounded-lg hover:scale-125 duration-200'
                />
              </div>
              <p className='text-sm md:text-base font-light'>
                We understand that everyone&apos;s needs are unique. That&apos;s
                why we offer flexible subscription plans to fit your budget and
                lifestyle. Choose from ongoing monthly plans for consistent
                support or pay-as-you-go options for more occasional needs. Our
                transparent pricing structure allows you to easily manage your
                healthcare costs and find the perfect fit for your situation.
              </p>
            </div>
            <div className='p-6 shadow-md rounded-lg space-y-5 text-pretty'>
              <p className='text-lg md:text-xl '>
                Medical Checkups at Your Convenience
              </p>
              <div className='h-56 w-full rounded-lg overflow-hidden'>
                <Image
                  placeholder='blur'
                  loading='lazy'
                  src={deliver}
                  alt=''
                  className='h-56 w-full object-cover rounded-lg hover:scale-125 duration-200'
                />
              </div>
              <p className='text-sm md:text-base font-light'>
                Skip the waiting room! Schedule convenient at-home consultations
                with qualified healthcare professionals for minor medical needs.
                This can save you valuable time and provide the comfort and
                privacy of your own environment. Additionally, these
                consultations can help identify potential health concerns early
                on, leading to better preventative care and improved overall
                health outcomes.
              </p>
            </div>
            <div className='p-6 bg-primary/10 shadow-md rounded-lg space-y-5 text-pretty'>
              <p className='text-lg md:text-xl '>Never Miss a Dose</p>
              <div className='h-56 w-full rounded-lg overflow-hidden'>
                <Image
                  placeholder='blur'
                  loading='lazy'
                  src={dose}
                  alt=''
                  className='h-56 w-full object-cover rounded-lg hover:scale-125 duration-200'
                />{' '}
              </div>
              <p className='text-sm md:text-base font-light'>
                Manage your medications effortlessly with our convenient
                prescription delivery service. Get your medications delivered
                directly to your doorstep, ensuring you stay on track with your
                treatment regimen and avoid running out of essential
                medications.
              </p>
            </div>
            <div className='p-6 shadow-md rounded-lg space-y-5 text-pretty'>
              <p className='text-lg md:text-xl '>
                24/7 Expert Support at Your Fingertips
              </p>
              <div className='h-56 w-full rounded-lg overflow-hidden'>
                <Image
                  placeholder='blur'
                  loading='lazy'
                  src={alltime}
                  alt=''
                  className='h-56 w-full object-cover rounded-lg hover:scale-125 duration-200'
                />
              </div>
              <p className='text-sm md:text-base font-light'>
                Gain access to a team of qualified healthcare professionals
                24/7. Get your questions answered, receive guidance on health
                concerns, or simply have peace of mind knowing there&apos;s
                always someone available to support you on your wellness
                journey.
              </p>
            </div>
            <div className='p-6 bg-primary/10 shadow-md rounded-lg space-y-5 text-pretty'>
              <p className='text-lg md:text-xl '>
                Empowerment Through Education
              </p>
              <div className='h-56 w-full rounded-lg overflow-hidden'>
                <Image
                  placeholder='blur'
                  loading='lazy'
                  src={know}
                  alt=''
                  className='h-56 w-full object-cover rounded-lg hover:scale-125 duration-200'
                />
              </div>
              <p className='text-sm md:text-base font-light'>
                We believe knowledge is power. Our library of informative
                articles, videos, and tools provides you with the resources you
                need to learn about preventative care, make informed health
                decisions, and take control of your well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
