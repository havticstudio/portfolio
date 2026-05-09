"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { FaUserTie } from "react-icons/fa6";
import Link from "next/link";
import { TbPhoneCall } from "react-icons/tb";
import { IoCopyOutline } from "react-icons/io5";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

const ProfileCard = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let pathName = usePathname();

  const handleCopyEmail = () => {
    const email = "freelancerarif68@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Copy Email success!", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div
      className={` ${
        (pathName === "/about" || pathName === "/services" || pathName === "/project" || pathName === "/contact") &&
        windowSize.width !== 1536 &&
        windowSize.width !== 1707
          ? "fixed"
          : ""
      } `}
    >
      <Container className={""}>
        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:border-gray-800 border border-gray-100 w-[416px] rounded-2xl overflow-hidden p-[24px] bg-white dark:bg-black">
          {/* Image Section */}
          <div className="w-[368px] bg-slate-200 dark:bg-gray-700 mx-auto rounded-xl">
            <Image
              className="mx-auto"
              src="/profile-2.png"
              width={368}
              height={500}
              alt="Picture of the author"
            />
          </div>
          {/* Name Section */}
          <div className="mt-6">
            {/* Name */}
            <h2 className="text-[24px] font-semibold flex items-center gap-4 text-black dark:text-white">
              Ariful Islam{" "}
              <FaUserTie className="text-[16px] text-gray-500 dark:text-gray-400" />
            </h2>
            <h2 className="uppercase font-semibold text-[12px] text-black dark:text-gray-200">
              CEO at .....
            </h2>
            {/* Description */}
            <div className="mt-2">
              <p className="capitalize dark:text-gray-400">
                A Passionate{" "}
                <b className="dark:text-white">Frontend Developer</b> 🖥️ &{" "}
                <b className="dark:text-white">Graphic Designer</b> having{" "}
                <b className="dark:text-white">4+ </b>
                years of Experiences.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Link
                href="tel:+1234567890"
                className="px-6 py-4 bg-[#4770ff] text-white font-medium rounded-2xl flex items-center gap-2"
              >
                <TbPhoneCall /> Book A Call
              </Link>

              <div
                onClick={handleCopyEmail}
                className="px-6 cursor-pointer py-4 border border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-black dark:text-gray-400 dark:border-gray-700 font-medium rounded-2xl flex items-center gap-2"
              >
                <IoCopyOutline /> Copy Email
              </div>
            </div>
            {/* Social Accounts */}
            <div className="flex gap-3 mt-6">
              <div className="border border-gray-500 dark:border-gray-800 dark:bg-gray-800 rounded-lg">
                <Link href={"/"}>
                  <FaFacebook className="w-10 h-10 px-[10px] py-[10px] dark:text-white hover:text-[#4770ff] dark:hover:text-[#4770ff]" />
                </Link>
              </div>
              <div className="border border-gray-500 dark:border-gray-800 dark:bg-gray-800 rounded-lg">
                <Link href={"/"}>
                  <FaGithub className="w-10 h-10 px-[10px] py-[10px] dark:text-white hover:text-[#4770ff] dark:hover:text-[#4770ff]" />
                </Link>
              </div>
              <div className="border border-gray-500 dark:border-gray-800 dark:bg-gray-800 rounded-lg">
                <Link href={"/"}>
                  <MdOutgoingMail className="w-10 h-10 px-[10px] py-[10px] dark:text-white hover:text-[#4770ff] dark:hover:text-[#4770ff]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ProfileCard;
