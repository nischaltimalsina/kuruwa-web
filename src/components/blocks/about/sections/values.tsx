import React from 'react';

export const Values = () => {
  return (
    <section className='py-20 bg-primary/10 leading-relaxed tracking-wide'>
      <div className='container'>
        <h1 className='text-3xl leading-tight tracking-tight sm:text-4xl '>
          Our Mission
        </h1>
        <p className='mt-8 text-base  text-pretty max-w-3xl '>
          To empower individuals and families to take control of their health by
          providing a comprehensive care ecosystem that prioritizes preventative
          care, fosters self-management, and promotes a balanced approach to
          well-being.
        </p>
        <div className='basis-full lg:basis-1/2 flex flex-col items-start mt-12'>
          <p className='text-2xl md:text-3xl font-medium'>Our Vision</p>
          <p className='mt-2 text-base sm:text-xl text-muted-foreground font-light'>
            We envision a world where:
          </p>
          <ul className='mt-8 gap-4 text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <li className='p-6 border border-primary border-dashed rounded-lg bg-primary/10'>
              <strong>Preventative care is prioritized: </strong>
              By focusing on proactive health management, we can help
              individuals avoid potential health challenges and live longer,
              healthier lives.
            </li>
            <li className='p-6 border border-primary border-dashed rounded-lg'>
              <strong>Self-management is encouraged: </strong>
              We empower individuals with the knowledge and resources they need
              to make informed healthcare decisions and take an active role in
              managing their well-being.
            </li>
            <li className='p-6 border border-primary border-dashed rounded-lg bg-primary/10'>
              <strong>Work-life balance is achieved: </strong>
              Work-life balance is achieved: We recognize the importance of
              balancing work and personal commitments. Our services help
              individuals maintain their health and well-being while managing
              the demands of daily life.
            </li>
            <li className='p-6 border border-primary border-dashed rounded-lg'>
              <strong>Quality care is accessible: </strong>
              We strive to make high-quality care services accessible to
              everyone, regardless of location or socioeconomic background.
            </li>
          </ul>
        </div>
        <div className='basis-full lg:basis-1/2 flex flex-col items-start mt-12'>
          <p className='text-2xl md:text-3xl font-medium'>Our Values</p>
          <ul className='mt-8 gap-4 text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <li className='p-6 border border-primary border-dashed rounded-lg'>
              <strong>Empathy: </strong>
              We place the needs and well-being of our users at the forefront of
              everything we do.
            </li>
            <li className='p-6 border border-primary border-dashed rounded-lg bg-primary/10'>
              <strong>Integrity: </strong>
              We operate with transparency and accountability, building trust
              with our users and partners.
            </li>
            <li className='p-6 border border-primary border-dashed rounded-lg bg-primary/20'>
              <strong>Innovation: </strong>
              We are committed to continuous improvement and developing new ways
              to empower individuals to manage their health.
            </li>
            <li className='p-6 border border-primary border-dashed rounded-lg bg-primary/10'>
              <strong> Inclusivity: </strong>
              We believe everyone deserves access to quality care, regardless of
              their background or circumstances.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
