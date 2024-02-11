export interface SectionHeaderProps {
  title: string;
  color?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  color,
  className,
  ...rest
}: SectionHeaderProps) => {
  const textColor = color === "white" ? "text-white" : "text-primary";
  const sectionHeaderClassName = `md:text-6xl text-3xl font-normal   ${textColor} ${
    className || ""
  }`;
  return (
    <h1 className={sectionHeaderClassName} {...rest}>
      {title}
    </h1>
  );
};

export default SectionHeader;
