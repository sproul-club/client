interface Configuration {
  description: string;
}
const allCategories = [
  'Design',
  'Apparel',
  'Legal',
  'Education',
  'Social Good',
  'Health/Wellness',
  'Sports',
  'Politics',
  'Consulting',
  'Business',
  'Technology',
  'Journalism',
  'Engineering',
  'Academic',
  'ASUC',
  'Cultural',
  'Identity',
  'Spiritual',
  'Religious',
  'Computer Science',
  'Performing Arts',
  'Media/Firm',
  'Social',
  'CalGreeks',
  'Environment/Sustainability',
  'Marketing',
  'Real Estate',
] as const;

export type CategoryString = typeof allCategories[number];

export default class Category {
  getDescription(input: string): Configuration['description'] {
    const config = Category.configurations[input];
    if (!config) return 'No description';
    return config.description;
  }

  all() {
    return Category.allCategories;
  }

  static allCategories = allCategories;
  static featuredCategories = ['Design', 'Education', 'Politics'];

  private static configurations: { [key: string]: Configuration } = {
    consulting: {
      description: '',
    },
  };
}
