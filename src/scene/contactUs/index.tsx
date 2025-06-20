// import React from 'react'

import { motion } from "framer-motion";
import  { SelectedPage } from "../shared/types";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import HText from "../shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault()
        }
    }

  return (
    <section id="contactus" className="mx-auto w-5/6 py-10 sm:py-16 md:py-20 md:pb-32">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* HEADER */}
            <motion.div className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5">
                    Take the first step toward a stronger, healthier you. Our programs are 
                    designed to motivate, challenge, and transform at your pace. Train smarter, 
                    feel better, and see real results with expert guidance and a supportive environment.
                </p>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0},
                    }}
                >
                    <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/75f78950d4bc4d2e2edf41c3e99d43c0" method="POST">
                        <input className={inputStyles} type="text" placeholder="NAME"
                            {...register("fname", {
                                required: true,
                                maxLength: 100,
                            })}
                         />
                         {errors.fname && (
                            <p className="mt-1 text-primary-500">
                                {errors.fname.type === "required" && "This field is required."}
                                {errors.fname.type === "maxLength" && "Max lenght is 100 characters."}
                            </p>
                         )}

                        <input className={inputStyles} type="text" placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                         />
                         {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid Emain Address."}
                            </p>
                         )}

                         <textarea className={`${inputStyles} resize-none`} placeholder="MESSAGE"
                            rows={4}
                            cols={5}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                         />
                         {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max lenght is 2000 characters."}
                            </p>
                         )}

                        <button type="submit"
                            className="rounded-lg bg-secondary-500 w-full px-20 py-3 font-semibold transition duration-500 sm:w-[40%] hover:text-white md:mt-5"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0},
                    }}
                >
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img src={ContactUsPageGraphic} alt="contact us page graphic" className="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs