import React from 'react';

import { FaGithubSquare } from 'react-icons/fa';

import { contactData } from '@/lib/data';

type IconProps = {
  href: string;
  Icon: any;
};

const ClickableIcon = (props: IconProps) => {
  return (
    <a href={props.href} className='' target={'_blank'} rel='noreferrer'>
      <div
        className={'w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer'}
      >
        {props.Icon}
      </div>
    </a>
  );
};

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center py-8 space-y-4'>
      <div className={`flex flex-row space-x-8  lg:hidden `}>
        {Object.values(contactData.socialMedia).map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.link} Icon={iconData.icon} />;
        })}
      </div>
      <a href={contactData.projectLink} className='' target={'_blank'} rel='noreferrer'>
        <div
          className='group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  '
        >
          <span className='liner-background sm:text-sm text-xs'>Built by Akash</span>

          <span className='text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary'>
            <FaGithubSquare
              className={'w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary'}
            />
            <span className=''>Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
