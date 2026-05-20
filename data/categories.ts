// Category data used by browse and explore filters.
export type CategoryIcon =
  | 'banking'
  | 'food'
  | 'student'
  | 'tech'
  | 'ai-tools'
  | 'research'
  | 'shopping'
  | 'travel'
  | 'subscriptions';

export type CategoryTone =
  | 'purple'
  | 'orange'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'pink';

export type CategoryId =
  | 'banking'
  | 'food'
  | 'student-deals'
  | 'tech'
  | 'ai-tools'
  | 'research-rewards'
  | 'shopping'
  | 'travel'
  | 'subscriptions';

export type Category = {
  id: CategoryId;
  label: string;
  icon: CategoryIcon;
  tone: CategoryTone;
};

export const categories: Category[] = [
  {
    id: 'banking',
    label: 'Banking',
    icon: 'banking',
    tone: 'purple',
  },
  {
    id: 'food',
    label: 'Food',
    icon: 'food',
    tone: 'orange',
  },
  {
    id: 'student-deals',
    label: 'Student Deals',
    icon: 'student',
    tone: 'blue',
  },
  {
    id: 'tech',
    label: 'Tech',
    icon: 'tech',
    tone: 'green',
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    icon: 'ai-tools',
    tone: 'yellow',
  },
  {
    id: 'research-rewards',
    label: 'Research & Rewards',
    icon: 'research',
    tone: 'green',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: 'shopping',
    tone: 'pink',
  },
  {
    id: 'travel',
    label: 'Travel',
    icon: 'travel',
    tone: 'yellow',
  },
  {
    id: 'subscriptions',
    label: 'Subscriptions',
    icon: 'subscriptions',
    tone: 'purple',
  },
];
