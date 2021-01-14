export const filterClubs = (allOrganizations, formDetails, tagOptions, num_results, favorites, sort) => {

  // console.log(allOrganizations)

  // console.log(num_results)
  const orgList = allOrganizations

  // Filter by name
  let filteredClubs = orgList.filter(club => club.name.toLowerCase().includes(formDetails.name.toLowerCase()))

  // Filter by favorites if student account
  if (favorites)
    filteredClubs = filteredClubs.filter(
      item => favorites.includes(item.name)
    )

  // Filter by app required checked
  if(formDetails.appReq)
    filteredClubs = filteredClubs.filter(club => club.app_required === true)

  // Filter - app not required checked
  if (formDetails.noAppReq)
    filteredClubs = filteredClubs.filter(club => club.app_required === false)

  // Filter - recruiting checked
  if (formDetails.recruiting)
    filteredClubs = filteredClubs.filter(club => club.app_required === true)

  // Filter - not recruiting checked
  if (formDetails.notRecruiting)
    filteredClubs = filteredClubs.filter(club => club.app_required === false)
  
  // Filter by tags
  let searchTags = []
  for (const [key, value] of Object.entries(formDetails.tags)) {
    if(key && value === true) searchTags.push(key)
  }

  for (let tag of searchTags){
    filteredClubs = filteredClubs.filter(club => {
      let clubtags = club.tags.map(tag => tagOptions[tag].label)
      return clubtags.includes(tag)
    })
  }

  // SORTING - a.name > b.name for ascending, b.name for descending

  function sorted(type) {
    if (type == "Fresh") {
      return function (a, b) {
        // equal items sort equally
        if (a.last_updated === b.last_updated) {
            return 0;
        }
        // nulls sort after anything else
        else if (a.last_updated === null) {
            return 1;
        }
        else if (b.last_updated === null) {
            return -1;
        }
        // otherwise, lowest sorts first
        else {
            return a.last_updated < b.last_updated ? -1 : 1;
        }
      };
    } else {
      return function (a, b) {
        // equal items sort equally
        if (a.apply_deadline_end === b.apply_deadline_end) {
            return 0;
        }
        // nulls sort after anything else
        else if (a.apply_deadline_end === null) {
            return 1;
        }
        else if (b.apply_deadline_end === null) {
            return -1;
        }
        // otherwise, lowest sorts first
        else {
            return a.apply_deadline_end < b.apply_deadline_end ? -1 : 1;
        }
      };
    }
  }

  if (formDetails.sort === 'Asc') {
    filteredClubs = filteredClubs.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  } else if (formDetails.sort == "Desc") {
    filteredClubs = filteredClubs.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
  } else if (formDetails.sort == "Desc" || formDetails.sort == 'Fresh') {
    filteredClubs = filteredClubs.sort(sorted(formDetails.sort));
  }
  
  
  const num_filtered_results = filteredClubs.length
  const sliced_filtered_results = filteredClubs.slice(0, num_results)

  return [num_filtered_results, sliced_filtered_results]
}