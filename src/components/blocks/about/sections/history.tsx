import React from 'react';
import care from '@/assets/images/care.jpg';
import Image from 'next/image';

export const History = () => {
  return (
    <section>
      <div className='container pb-24'>
        <div className='h-96 w-full rounded-lg overflow-hidden'>
          <Image src={care} alt='' className='h-full w-full object-cover' />
        </div>
        <h1 className='text-3xl leading-tight tracking-tight sm:text-4xl mt-12'>
          Kuruwa&apos;s Inception: Born from Need, not Desire
        </h1>
        <p className='mt-8 text-base leading-relaxed tracking-wide'>
          In the heart of Nepal, where majestic peaks pierce the sky, a vision
          for a better way to care for loved ones was born. It wasn&apos;t
          birthed in a sterile conference room, but amidst the constant hum of
          social media. We, a team fueled by a passion for social good,
          couldn&apos;t help but notice a recurring theme: families desperately
          seeking reliable caretakers for hospitalized loved ones. Distance,
          busy schedules, the weight of responsibility – these messages painted
          a picture of a growing need, a gap in the traditional healthcare
          system.
        </p>
        <p className='mt-4 text-base leading-relaxed tracking-wide'>
          Inspired by this outpouring of vulnerability and the yearning for
          support, we envisioned a solution that transcended the limitations of
          existing models. Technology, we believed, could be the bridge. Imagine
          a user-friendly platform connecting families with compassionate
          caretakers, offering not just a physical presence, but a comforting
          human connection during a vulnerable time. Kuruwaa&apos;s story is one
          of innovation sparked by the raw realities shared online. It&apos;s a
          story about harnessing the power of technology to empower individuals
          and families to prioritize well-being, weaving a user-friendly care
          ecosystem that brings peace of mind and a comforting touch when
          it&apos;s needed most. This is just the beginning of Kuruwaa&apos;s
          journey, but the passion ignited by those social media threads
          continues to fuel our mission: to revolutionize the way healthcare is
          accessed and managed, ensuring everyone has the support they need to
          thrive.
        </p>
        <p className='mt-4 text-base leading-relaxed tracking-wide'>
          Kuruwaa is driven by a passionate team of healthcare professionals,
          technology experts, and care advocates who share a common goal: to
          revolutionize the way individuals and families access and manage their
          healthcare. We are dedicated to continuous innovation, ensuring our
          services remain at the forefront of the healthcare industry.
        </p>
      </div>
    </section>
  );
};
