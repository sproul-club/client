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
    'design',
    'apparel',
    'social good',
    'politics',
    'consulting',
    'technology',
    'blockchain',
    'computer science',
  ] as const;

  private static configurations: { [key: string]: Configuration } = {
    consulting: {
      description: '',
    },
  };
}
