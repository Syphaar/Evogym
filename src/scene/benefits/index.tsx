import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../shared/HText";
import { SelectedPage, type BenefitType } from "../shared/types";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import ActionButton from "../shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "We’ve got the latest gym equipment and plenty of space so you can work out comfortably. Everything is kept clean and well-maintained to help you focus on your training.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "From high-energy cardio to relaxing yoga, our classes cover all fitness levels and interests. There’s something new to try every week to keep your routine fresh and fun.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Our trainers know their stuff and are here to help you every step of the way. They’ll create plans that fit your needs and keep you motivated to reach your goals.   ",
  },
];

// const container = {
//     hidden: {},
//     visible: {
//         transition: { staggerChildren: 0.2 }
//     }
// }

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-10 pb-28 sm:py-16 md:py-20">
        <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            
            {/* HEADER */}
            <motion.div className="md:my-5 md:w-3/5 md:pt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                }}
            >
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimste fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className="flex flex-col items-center justify-between gap-8 mt-5 md:flex-row"
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true, amount: 0.5 }}
                // variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-7 items-center justify-between gap-20 md:mt-28 md:mb-10 md:flex xl:mb-0 xl:mt-14">
                {/* GRAPHIC */}
                <img src={BenefitsPageGraphic} alt="benefit-page-graphic" className="mx-auto" />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="overflow-hidden">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className="overflow-hidden"
                        >
                            <p className="my-5">
                                Our members come from all walks of life, each with their own goals and reasons 
                                for showing up. Every workout is a step forward—whether it’s gaining strength, 
                                boosting energy, or simply feeling better. The support is real, and the progress 
                                speaks for itself. This is more than just a gym, it’s a place to grow, sweat, 
                                and succeed together.
                            </p>
                            <p className="mb-5">
                                From group classes that push you to do more, to equipment that 
                                fits every level, we’ve created an environment that keeps people 
                                coming back. It’s not just about fitness, it’s about community, 
                                commitment, and feeling great in your own skin.
                            </p>
                        </motion.div>
                    </div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;