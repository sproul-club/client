export const filterClubs = (allOrganizations, formDetails, tagOptions, num_results) => {

  console.log(num_results)
  const orgList = allOrganizations.map((club) => club.club)

  let filteredClubs = orgList.filter(club => club.name.includes(formDetails.name))
  if(formDetails.appReq)
    filteredClubs = filteredClubs.filter(club => club.app_required === true)
  if (formDetails.noAppReq)
    filteredClubs = filteredClubs.filter(club => club.app_required === false)
  if (formDetails.recruiting)
    filteredClubs = filteredClubs.filter(club => club.app_required === true)
  if (formDetails.notRecruiting)
    filteredClubs = filteredClubs.filter(club => club.app_required === false)
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