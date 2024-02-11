interface ServicesComponentProps {
  title: string;
  icon: string;
  description: string;
}

const ServicesComponent = ({
  title,
  icon,
  description,
}: ServicesComponentProps) => {
  return (
    <div className="flex flex-col flex-1 md:min-w-[50%] min-w-full  p-4 text-white border rounded-2xl items-center gap-4 cursor-pointer hover:scale-105  duration-300  ">
      <img
        src={icon}
        alt={title}
        className="h-48 w-48 object-cover p-2"
        loading="lazy"
      />
      <h3 className="text-3xl text-center ">{title}</h3>
      <p className="text-xl text-center">{description}</p>
    </div>
  );
};

export default ServicesComponent;
