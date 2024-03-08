import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='border-t border-primary/50 border-dashed bg-primary/20'>
      <div className='container py-8'>
        <div className=''></div>
        <div className='text-center'>
          <p className=''>
            Copyright &copy; {new Date().getFullYear()} Kuruwaa. All Rights
            Reserved | Design by{' '}
            <Link
              target='_blank'
              className='text-primary'
              href={'https:/www.nischaltimalsina.com.np'}>
              Nischal Timalsina
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
