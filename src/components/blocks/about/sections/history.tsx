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
          Nestled amidst Nepal&apos;s majesty, Kuruwaa wasn&apos;t born in a
          boardroom, but in the constant hum of social media. We, passionate
          about social good, noticed a recurring cry: families seeking reliable
          caretakers for hospitalized loved ones. Distance, busy lives, the
          weight of responsibility – a gap in traditional healthcare.
        </p>
        <p className='mt-4 text-base leading-relaxed tracking-wide'>
          Inspired, we envisioned a solution. Technology, the bridge. A
          user-friendly platform connecting families with compassionate
          caretakers, offering a comforting human presence during vulnerability.
          Kuruwaa&apos;s story is innovation sparked by online realities, harnessing
          technology to empower well-being. It&apos;s about a user-friendly care
          ecosystem bringing peace of mind when it&apos;s needed most. This is just
          the beginning, fueled by our mission: to revolutionize healthcare
          access, ensuring everyone has the support they need.
        </p>
        <p className='mt-4 text-base leading-relaxed tracking-wide'>
          Kuruwa is driven by a passionate team of healthcare professionals,
          technology experts, and care advocates who share a common goal: to
          revolutionize the way individuals and families access and manage their
          healthcare. We are dedicated to continuous innovation, ensuring our
          services remain at the forefront of the healthcare industry.
        </p>
      </div>
    </section>
  );
};
