import { Map } from 'immutable'

const DATA_LOADED = 'DATA_LOADED'

export function loadData ({cleanData, min, mean, max}) {
  return {
    type: DATA_LOADED,
    cleanData,
    min,
    mean,
    max,
  }
}

const initialDataState = Map({
  patientData: {},
  min: 0,
  mean: 0,
  max: 0,
  dataLoaded: false,
})

export default function data (state = initialDataState, action) {
  switch (action.type) {
    case DATA_LOADED :
      return state.merge({
        patientData: action.cleanData,
        min: action.min,
        mean: action.mean,
        max: action.max,
        dataLoaded: true,
      })
    default :
      return state
  }
}
