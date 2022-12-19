export interface JobProps {
  job: Job;
}

export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBgColor: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Requirements;
}

export interface Requirements {
  content: string;
  items: string[];
}

export interface SearchTerm {
  title: string;
  location: string;
}

export interface JobsState {
  searchTerm: SearchTerm;
  isChecked: boolean;
  filteredData: Job[];
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheck: React.MouseEventHandler<HTMLInputElement> | undefined;
  handleSubmit: (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => void;
}
