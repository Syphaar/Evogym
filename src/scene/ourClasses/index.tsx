import { SelectedPage } from "../shared/types";
import type { ClassType } from "../shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import HText from "../shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build muscle, improve endurance, and boost overall strength with our focused weight training sessions. Perfect for all levels, these classes combine safe technique and effective workouts to help you reach your fitness goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and improve posture through targeted exercises designed to engage abdominal muscles and lower back. These classes help increase stability and balance, supporting your overall athletic performance and daily movement.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Challenge yourself with dynamic, fun workouts inspired by outdoor activities. These classes combine cardio, strength, and agility exercises to boost endurance and keep your fitness routine exciting and fresh every time you join in.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Train smarter with personalized workouts that focus on strength, flexibility, and stamina. Our expert coaches guide you through routines that fit your fitness level, helping you progress steadily and safely toward your personal best.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-10 sm:py-16 md:py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        {/* HEADER */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Build strength and confidence with expert-led classes designed to challenge, inspire, and support your growth.
            </p>
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <div className="mt-2 w-full overflow-x-auto overflow-y-hidden">
          <ul className="flex rounded-md whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
