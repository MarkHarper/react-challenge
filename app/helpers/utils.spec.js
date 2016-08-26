import expect from 'expect'
import { describe, it } from 'mocha'
import { formatPatientData, age } from './utils'

describe('age', () => {
  it('should calculate the correct age, given a date string', () => {
    let case1 = '07/08/1985'
    let case2 = '06/12/1964'
    let answer1 = '31'
    let answer2 = '52'
    expect(age(case1)).toEqual(answer1)
    expect(age(case2)).toEqual(answer2)
  })
})

describe('formatPatientData', () => {
  it('reformat a patient\'s data to match the desired properties', () => {
    let case1 = {
      'name': {
        'first': 'Harry',
        'last': 'Carroll',
      },
      'mrn': '56789',
      'dob': '06/12/1964',
      'sex': 'Male',
      'treatment_site': 'Prostate',
      'tumor_size_cm': 0.5,
      'histology': 'Carcinoma',
      'weight': 212.2,
    }
    let answer1 = [{
      'name': 'Harry Carroll',
      'mrn': '56789',
      'dob': '06/12/1964',
      'demographics': '52 y.o Male',
      'treatment_site': 'Prostate',
      'tumor_size': 0.5,
      'histology': 'Carcinoma',
      'weight': 212.2,
    }]

    expect(formatPatientData(case1, [])).toEqual(answer1)
  })
})
