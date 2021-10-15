export const filterClubs = (
  allOrganizations,
  formDetails,
  tagOptions,
  num_results,
  favorites
) => {
  // console.log(allOrganizations)

  // console.log(num_results)
  const orgList = allOrganizations;

  // Filter by name
  let filteredClubs = orgList.filter((club) =>
    club.name.toLowerCase().includes(formDetails.name.toLowerCase())
  );

  let searchTags = [];
  let tagLabels = tagOptions.map((tag) => tag.label);
  for (let tag of tagLabels) {
    if (
      formDetails.name.length > 3 &&
      tag.toLowerCase().includes(formDetails.name.toLowerCase())
    ) {
      // console.log("search input matches tag: " + tag);
      searchTags.push(tag);
    }
  }
  // if no results from searching by name and search input matches tags instead
  if (
    formDetails.name.length > 0 &&
    filteredClubs.length === 0 &&
    searchTags.length > 0
  ) {
    for (let tag of searchTags) {
      filteredClubs = orgList.filter((club) => {
        let clubtags = club.tags.map((tag) => tagOptions[tag].label);
        return clubtags.includes(tag);
      });
    }
  }

  // Filter by favorites if student account
  if (favorites)
    filteredClubs = filteredClubs.filter((item) =>
      favorites.includes(item.name)
    );

  // Filter by app required checked
  if (formDetails.appReq)
    filteredClubs = filteredClubs.filter((club) => club.app_required === true);

  // Filter - app not required checked
  if (formDetails.noAppReq)
    filteredClubs = filteredClubs.filter((club) => club.app_required === false);

  // Filter - recruiting checked
  if (formDetails.recruiting)
    filteredClubs = filteredClubs.filter((club) => club.new_members === true);

  // Filter - not recruiting checked
  if (formDetails.notRecruiting)
    filteredClubs = filteredClubs.filter((club) => club.new_members === false);

  // Filter by tags
  searchTags = []
  for (const [key, value] of Object.entries(formDetails.tags)) {
    if (key && value === true) searchTags.push(key);
  }

  let tempTags = [];
  for (let tag of searchTags) {
    tempTags = tempTags.concat(
      filteredClubs.filter((club) => {
        let clubtags = club.tags.map((tag) => tagOptions[tag].label);
        return clubtags.includes(tag);
      })
    );
  }
  // remove duplicates
  let uniqueClubs = [];
  for (let club of tempTags.slice(0, tempTags.length)) {
    if (!uniqueClubs.includes(club)) {
      uniqueClubs.push(club);
    }
  }
  // console.log("uniqueClubs: " + uniqueClubs);
  filteredClubs =
    uniqueClubs.length > 0 || searchTags.length > 0
      ? uniqueClubs
      : filteredClubs;

  // Filter by members
  let searchMembers = [];
  for (const [key, value] of Object.entries(formDetails.members)) {
    if (key && value === true) searchMembers.push(Number(key));
  }
  if (searchMembers.length > 0) {
    filteredClubs = filteredClubs.filter((club) => {
      return searchMembers.includes(club.num_users);
    });
  }

  // Sorting
  function random(clubs) {
    for (var i = clubs.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = clubs[i];
      clubs[i] = clubs[j];
      clubs[j] = temp;
    }
    return clubs;
  }

  function sorted(type) {
    if (type === "Fresh") {
      return function (a, b) {
        // equal items sort equally
        if (a.last_updated === b.last_updated) {
          return 0;
        }
        // nulls sort after anything else
        else if (a.last_updated === null) {
          return 1;
        } else if (b.last_updated === null) {
          return -1;
        }
        // otherwise, lowest sorts first
        else {
          return a.last_updated < b.last_updated ? 1 : -1;
        }
      };
    } else {
      return function (a, b) {
        var a_compare = a.app_required
          ? a.apply_deadline_end
          : a.recruiting_end;
        var b_compare = b.app_required
          ? b.apply_deadline_end
          : b.recruiting_end;
        // equal items sort equally
        if (a_compare === b_compare) {
          return 0;
        }
        // nulls sort after anything else
        else if (a_compare === null || a_compare === "1970-01-01T00:00:00") {
          return 1;
        } else if (b_compare === null || b_compare === "1970-01-01T00:00:00") {
          return -1;
        }
        // otherwise, lowest sorts first
        else {
          return a_compare > b_compare ? 1 : -1;
        }
      };
    }
  }
  if (formDetails.sort === "Rand") {
    filteredClubs = random(filteredClubs);
  } else if (formDetails.sort === "Asc") {
    filteredClubs = filteredClubs.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  } else if (formDetails.sort === "Desc") {
    filteredClubs = filteredClubs.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
    );
  } else {
    filteredClubs = filteredClubs.sort(sorted(formDetails.sort));
  }

  const num_filtered_results = filteredClubs.length;
  const sliced_filtered_results = filteredClubs.slice(0, num_results);

  return [num_filtered_results, sliced_filtered_results];
};

export const membersMap = [
  { value: 0, label: "< 10" },
  { value: 1, label: "10-20" },
  { value: 2, label: "20-50" },
  { value: 3, label: "50-100" },
  { value: 4, label: "100+" },
];
