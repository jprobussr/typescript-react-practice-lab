export type Topic = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export const topics: Topic[] = [
  {
    id: 1,
    title: "TypeScript variables",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Function return types",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Object types",
    isCompleted: true,
  },
  {
    id: 4,
    title: "Typed arrays",
    isCompleted: true,
  },
  {
    id: 5,
    title: "Conditional rendering",
    isCompleted: false,
  },
];
