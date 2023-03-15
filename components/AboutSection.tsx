import React from "react"
import Image from "next/image"

import sharp from '../public/C.png';
import c from '../public/C++.png';
import android from '../public/Android.png';
import github from '../public/Github.png';
import php from '../public/Ph.png';
import js from '../public/Js.png';
import rj from '../public/Rj.png';

const skills = [
  { skill: sharp, title: "Csharp" },
  { skill: c, title: "C" },
  { skill: android, title: "Android" },
  { skill: github, title: "Github" },
  { skill: php, title: "Php" },
  { skill: js, title: "Javascript" },
  { skill: rj, title: "React" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Hosna and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Accra Ghana.
            </p>
            <br />
            <p>
              I graduated from California State University, Northridge in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-fuchsia-500 animate-pulse">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start ">
              {skills.map((item, idx) => {
                return (
                  // <p
                  //   key={idx}
                  //   className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  // >
                  //   {item.skill}
                  // </p>
                  <div>

                  <Image
                  src={item.skill}
                  alt=""
                  width={125}
                  height={125}
                  className="   md:block md:relative md:bottom-4 md:left-32 md:z-0"
                  key={idx}
                />
                
                </div>

                
                )
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
