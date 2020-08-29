import data from './data.json'

const PROJECT_NAME_ARRAY = new Map(data.map((item, index) => {
  return [item.project, index]
}))

export const isValidProject = (name) => {
  return Number.isInteger(PROJECT_NAME_ARRAY.get(name))
}

export const getProjectDetails = (name) => {
  return data[PROJECT_NAME_ARRAY.get(name)]
}