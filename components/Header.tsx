import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="relative flex items-start justify-between mx-3 xl:mx-6 xl:mt-3 z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          {/* {socials.map((social) => ( */}
          <SocialIcon
            // key={social._id}
            url="https://slack.com/app_redirect?channel=U048FPK0LUF"
            fgColor="gray"
            bgColor="transparent"
            className="w-10 h-10 mr-2"
          />
          {/* ))} */}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=5551994085461&text=Msg+from+the+portfolio+website&type=phone_number&app_absent=0"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <SocialIcon
            url="https://www.github.com/m-Petry"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/m-petry/"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
      </motion.div>
      {/* Mail */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2
        }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            url="mailto:marcelospetry@gmail.com?subject=Message%20from%20the%20Portfolio's%20Website&body=Hey!"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
}
