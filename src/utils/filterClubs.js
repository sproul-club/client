export const filterClubs = (allOrganizations, formDetails, tagOptions, num_results, favorites) => {

  console.log(allOrganizations)

  console.log(num_results)
  const orgList = allOrganizations

  // Filter by name
  let filteredClubs = orgList.filter(club => club.name.toLowerCase().includes(formDetails.name.toLowerCase()))

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

  // Filter by members
  let searchMembers = []
  for (const [key, value] of Object.entries(formDetails.members)) {
    if(key && value === true) searchMembers.push(Number(key))
  }
  console.log('selected', searchMembers)
  if(searchMembers.length > 0){
    filteredClubs = filteredClubs.filter(club => {
      return searchMembers.includes(club.num_users)
    })
  }


  // SORTING - a.name > b.name for ascending, b.name for descending
  // filteredClubs = filteredClubs.sort((a,b) => a.name > b.name ? -1 : 1);
  
  const num_filtered_results = filteredClubs.length
  const sliced_filtered_results = filteredClubs.slice(0, num_results)

  return [num_filtered_results, sliced_filtered_results]
}

export const membersMap = [
  {value: 0, label: '0-10'},
  {value: 1, label: '10-20'},
  {value: 2, label: '20-50'},
  {value: 3, label: '50-100'},
  {value: 4, label: '100+'},
]