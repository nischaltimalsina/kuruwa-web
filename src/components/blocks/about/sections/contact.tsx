import { Button, Input, Textarea } from '@/components/ui';
import React from 'react';

export const Contact = () => {
  return (
    <section id='contact' className=''>
      <div className='flex flex-col lg:flex-row gap-x-12 gap-y-8 w-full container items-start py-20'>
        <div className='lg:basis-1/2'>
          <h2 className='text-3xl sm:text-4xl text-pretty text-center lg:text-start'>
            Join us on this journey
          </h2>
          <p className='sm:text-lg text-muted-foreground max-w-2xl text-center lg:text-start mt-4'>
            Kuruwaa is more than just a service; it&apos;s a movement towards a
            healthier, happier future for all.
          </p>
        </div>
        <div className='basis-full lg:basis-1/2 flex flex-col gap-4 w-full'>
          <h3 className='text-xl sm:text-2xl text-pretty text-center lg:text-start'>
            Send us a Message.
          </h3>
          <Input className='h-12' placeholder='Your name' />
          <Input className='h-12' type='email' placeholder='Email address' />
          <Textarea className='' placeholder='Message' />
          <Button className='h-12 text-lg uppercase'>Send Inquiry</Button>
        </div>
      </div>
    </section>
  );
};
