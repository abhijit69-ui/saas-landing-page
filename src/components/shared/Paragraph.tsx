interface Props {
  children: React.ReactNode;
  className?: string;
}
const Paragraph = ({ children, className = '' }: Props) => {
  return <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>;
};

export default Paragraph;
