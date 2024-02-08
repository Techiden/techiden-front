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
  const sectionHeaderClassName = `text-6xl font-normal mb-20 ${textColor} ${
    className || ""
  }`;
  return (
    <h1 className={sectionHeaderClassName} {...rest}>
      {title}
    </h1>
  );
};

export default SectionHeader;
