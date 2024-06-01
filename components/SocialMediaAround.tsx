import React from "react";
import {  motion } from "framer-motion";
import { contactData } from "@/lib/data";
type IconProps = {
    href: string;
    Icon:any;
  };

const IconClickableWithAnimation = (props:IconProps) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <div className={"w-6 h-6 text-gray-400  hover:text-AAsecondary fill-current hover:cursor-pointer"} >
        {props.Icon}

        </div>
      </a>
    </motion.div>
  );
};
export default function SocialMediaAround(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 0.5, duration: 0.5 } }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
          {Object.values(contactData.socialMedia).map((iconData, index) => {
            return <IconClickableWithAnimation key={index} href={iconData.link} Icon={iconData.icon} />;
          })}
          
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 0.5, duration: 0.5 } }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a className="liner-background" href={`mailto:${contactData.email}`} target={"_blank"} rel="noreferrer">
              <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                ak.akki907<span className="text-AAsecondary">@</span>gmail<span className="text-AAsecondary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
