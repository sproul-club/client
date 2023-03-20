interface Configuration {
  description: string;
}

export default class Categories {
  getDescription(input: string): Configuration['description'] {
    const config = Categories.configurations[input];
    if (!config) return 'No description';
    return config.description;
  }

  all() {
    return Categories.allCategories;
  }

  private static allCategories = [
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

  private static configurations: { [key: string]: Configuration } = {
    consulting: {
      description: '',
    },
  };
}
