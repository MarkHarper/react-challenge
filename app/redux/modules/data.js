import { Map } from 'immutable'

const DATA_LOADED = 'DATA_LOADED'

export function loadData (cleanData) {
  return {
    type: DATA_LOADED,
    cleanData,
  }
}

const initialDataState = Map({
  patientData: [],
  dataLoaded: false,
})

export default function data (state = initialDataState, action) {
  switch (action.type) {
    case DATA_LOADED :
      return state.merge({
        patientData: action.cleanData,
        dataLoaded: true,
      })
    default :
      return state
  }
}
