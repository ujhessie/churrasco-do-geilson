export const Button = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="py-2 px-4  text-[14px] font-bold rounded-full bg-orange-400 text-white flex gap-2 items-center">
      {icon}
      {children}
    </div>
  );
};
