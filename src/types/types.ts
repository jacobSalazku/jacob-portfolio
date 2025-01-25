export type MenuButtonProps = {
  handleToggleMenu: () => void;
  isActive: boolean;
};

export type Project = {
  id: number;
  title: string;
  description: React.ReactNode | string;
  image: string;
  mobileImage: string;
  children?: React.ReactNode;
};

export type StackCards = {
  label: string;
};

export type TechnologiesUsed = {
  techStack: string[];
};

export type Sectionprops = {
  title?: string;
  children: React.ReactNode;
};
