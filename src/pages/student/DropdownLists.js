const minorsList = [
    'African American Studies',
    'American Studies',
    'Ancient Egyptian and Near Eastern Civilizations',
    'Anthropology',
    'Applied Language Studies',
    'Arabic',
    'Architecture',
    'Armenian Studies',
    'Art History',
    'Asian American and Asian Diaspora Studies',
    'Astrophysics',
    'Atmospheric Science',
    'Bioengineering',
    'Buddhist Studies',
    'Celtic Studies',
    'Chemical Engineering',
    'Chemistry',
    'Chicana/o and Latina/o Studies',
    'Chinese Language',
    'City Planning',
    'Classical Civilizations',
    'Climate Science',
    'Comparative Literature',
    'Computer Science',
    'Conservation and Resource Studies',
    'Creative Writing',
    'Dance and Performance Studies',
    'Data Science',
    'Demography',
    'Digital Humanities',
    'Disability Studies',
    'Dutch Studies',
    'Earth and Planetary Science',
    'East European/Eurasian Languages and/or Cultures',
    'Ecosystem Management and Forestry',
    'Education',
    'Electrical Engineering & Computer Sciences (EECS)',
    'Electronic Intelligent Systems',
    'Energy Engineering',
    'Energy and Resources',
    'English',
    'Environmental Design & Urbanism in Developing Countries',
    'Environmental Earth Science',
    'Environmental Economics and Policy',
    'Environmental Engineering',
    'Ethnic Studies',
    'Food Systems',
    'French',
    "Gender and Women's Studies",
    'Geography',
    'Geology',
    'Geophysics',
    'Geospatial Information Science and Technology',
    'Geosystems',
    'German',
    'Global Poverty and Practice',
    'Global Studies',
    'Greek',
    'Hebrew',
    'Hispanic Languages, Linguistics, and Bilingualism',
    'History',
    'History of the Built Environment',
    'Human Rights Interdisciplinary',
    'Industrial Engineering & Operations Research',
    'Italian Studies',
    'Jewish Studies',
    'Journalism',
    'Korean Language',
    'Landscape Architecture',
    'Latin',
    'Lesbian, Gay, Bisexual, & Transgender Studies',
    'Linguistics',
    'Logic',
    'Marine Science',
    'Materials Science & Engineering',
    'Mathematics',
    'Mechanical Engineering',
    'Medieval Studies',
    'Music',
    'Native American Studies',
    'Nuclear Engineering',
    'Nutritional Sciences: Physiology & Metabolism',
    'Nutritional Sciences: Toxicology',
    'Persian',
    'Philosophy',
    'Physics',
    'Planetary Science',
    'Political Economy',
    'Portuguese Language, Literatures, & Cultures',
    'Psychology',
    'Public Health',
    'Public Policy',
    'Race and the Law',
    'Rhetoric',
    'Russian Culture',
    'Russian Language',
    'Russian Literature',
    'Scandinavian',
    'Science and Math Education',
    'Social & Cultural Factors in Environmental Design',
    'South and Southeast Asian Studies',
    'Spanish Languages, Literatures, & Cultures',
    'Statistics',
    'Structural Engineering',
    'Sustainable Design',
    'Theater and Performance Studies',
    'Tibetan',
    'Turkish',
  ];

  const majorsList = [
    'African American Studies',
    'American Studies',
    'Ancient Egyptian and Near Eastern Art and Archaeology',
    'Anthropology',
    'Applied Mathematics',
    'Architecture',
    'Art History',
    'Art Practice',
    'Asian American and Asian Diaspora Studies',
    'Astrophysics',
    'Atmospheric Science',
    'Bioengineering',
    'Business Administration',
    'Celtic Studies',
    'Chemical Biology',
    'Chemical Engineering',
    'Chemistry',
    'Chicana/o and Latina/o Studies',
    'Chinese Language',
    'Civil Engineering',
    'Civil Engineering',
    'Classical Civilizations',
    'Classical Languages',
    'Cognitive Science',
    'Comparative Literature',
    'Computer Science',
    'Conservation and Resource Studies',
    'Dance and Performance Studies',
    'Data Science',
    'Dutch Studies',
    'EECS',
    'East Asian Religion, Thought and Culture',
    'East European/Eurasian Languages and/or Cultures',
    'Economics',
    'Ecosystem Management and Forestry',
    'Electrical Engineering & Computer Sciences (EECS)',
    'Energy Engineering',
    'Engineering Mathematics and Statistics',
    'Engineering Physics',
    'English',
    'Environmental Earth Science',
    'Environmental Economics and Policy',
    'Environmental Engineering Science',
    'Environmental Sciences',
    'Ethnic Studies',
    'Film',
    'French',
    "Gender and Women's Studies",
    'Genetics and Plant Biology',
    'Geography',
    'Geology',
    'Geophysics',
    'German',
    'Global Studies',
    'Greek',
    'History',
    'Industrial Engineering & Operations Research',
    'Integrative Biology',
    'Interdisciplinary Studies',
    'Italian Studies',
    'Japanese Language',
    'Landscape Architecture',
    'Latin',
    'Legal Studies',
    'Linguistics',
    'Marine Science',
    'Materials Science & Engineering',
    'Mathematics',
    'Mechanical Engineering',
    'Media Studies',
    'Microbial Biology',
    'Molecular Environmental Biology',
    'Molecular and Cell Biology',
    'Music',
    'Native American Studies',
    'Near Eastern Civilizations',
    'Near Eastern Languages & Literatures',
    'Nuclear Engineering',
    'Nutritional Sciences: Dietetics',
    'Nutritional Sciences: Physiology & Metabolism',
    'Nutritional Sciences: Toxicology',
    'Operations Research & Management Science',
    'Philosophy',
    'Physics',
    'Planetary Science',
    'Political Economy',
    'Political Science',
    'Pre-Med / Pre-Health',
    'Prelaw ',
    'Psychology',
    'Public Health',
    'Rhetoric',
    'Scandinavian',
    'Slavic Languages and Literatures',
    'Social Welfare',
    'Society and Environment',
    'Sociology',
    'South and Southeast Asian Studies',
    'Spanish and Portuguese',
    'Statistics',
    'Sustainable Environmental Design',
    'Theater and Performance Studies',
    'Urban Studies',
  ];

  const customStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      background: '#D1D3D4',
      color: '#2b2b2b',
      borderRadius: 4,
    }),
    control: (provided, state) => ({
      display: 'flex',
      width: 320,
      margin: 7,
      marginBottom: 8,
      fontSize: 12,
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      borderRadius: 5,
      border: 'solid 1px #949494',
      // border: (state.selectProps.error) ? 'solid 1px #ff2d2d' : 'solid 1px #949494',
    }),
    menu: (provided, state) => ({
      ...provided,
      margin: 8,
      marginTop: 2,
      width: 320,
      fontSize: '12px',
      fontFamily: 'Qanelas Soft',
      fontWeight: 300,
      fontStyle: 'normal',
      textAlign: 'left',
      color:
        state.selectProps.value && state.selectProps.value.length >= 3
          ? '#cccccc'
          : '#4e4e4e',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      background: '#D1D3D4',
      color: '#2b2b2b',
      borderRadius: 10,
      '&:hover': {
        color: 'hsl(0,0%,40%)',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#4e4e4e',
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      marginLeft: '4px',
      padding: '2px',
      paddingLeft: '5px',
      fontSize: '12px',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      width: 0,
    }),

    clearIndicator: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: '5px 8px',
    }),
    '@media only screen and (min-width: 1700px)': {
      menu: (provided, state) => ({
        ...provided,
        width: 500,
      }),
    },
  };

  const years = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

  export {minorsList, majorsList, customStyles, years};