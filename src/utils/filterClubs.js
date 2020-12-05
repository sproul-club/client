export const filterClubs = (allOrganizations, formDetails, tagOptions, num_results) => {

  console.log(num_results)
  const orgList = allOrganizations.map((club) => club.club)

  // Filter by name
  let filteredClubs = orgList.filter(club => club.name.toLowerCase().includes(formDetails.name.toLowerCase()))

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
  let searchTags = formDetails.tags.map((tag) => tag.label)
  for (let tag of searchTags){
    filteredClubs = filteredClubs.filter(club => {
      let clubtags = club.tags.map(tag => tagOptions[tag].label)
      return clubtags.includes(tag)
    })
  }
  
  const num_filtered_results = filteredClubs.length
  const sliced_filtered_results = filteredClubs.slice(0, num_results)

  return [num_filtered_results, sliced_filtered_results]
}