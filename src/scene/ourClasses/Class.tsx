// import React from 'react'

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `
    p-5 absolute z-30 flex h-full w-full flex-col items-center justify-center 
    whitespace-normal bg-primary-500 text-center text-white opacity-0  rounded-md
    transition duration-500 hover:opacity-90
  `;

  return (
    <li className="relative mx-2 inline-block h-[250px] min-w-[250px] sm:h-[380px] sm:min-w-[380px] md:min-w-[450px]">
      <div className={overlayStyles}>
        <p className="text-xl sm:text-2xl">{name}</p>
        {description && <p className="mt-3 text-sm sm:text-base">{description}</p>}
      </div>
      <img
        src={image}
        alt={`${image}`}
        className="h-full w-full object-cover rounded-md"
      />
    </li>
  );
};

export default Class;
