import Link from "next/link";

interface NavItemProps {
    label: string;
    link: string;
    isActive: boolean;
    activeIndex: number;
    toggleSelected: () => void;
}

export const NavItem = ({
  label,
  link,
  isActive,
  activeIndex,
  toggleSelected,
}: NavItemProps) => {
  const containerClasses = `${
    isActive && activeIndex !== -1
      ? "bg-light_turquoise_active"
      : "bg-white px-2 py-1 hover:bg-light_turquoise"
  }`;

  return (
    <div className={containerClasses}>
      <Link href={link} onClick={toggleSelected} title={label}>
        {label}
      </Link>
    </div>
  );
};