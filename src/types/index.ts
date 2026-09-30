export type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
};

export type PageProps = {
  className?: string;
};

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
};