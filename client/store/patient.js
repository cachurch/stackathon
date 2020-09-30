import axios from 'axios'

//INITIAL STATE
const initialState = {
  patients: [],
  patient: {}
}

//ACTION TYPES
const GET_PATIENTS = 'GET_PATIENTS'
const GET_PATIENT = 'GET_PATIENT'
const ADD_PATIENT = 'ADD_PATIENT'

//ACTION CREATORS
const getPatients = patients => ({
  type: GET_PATIENTS,
  patients
})

const getPatient = patientId => ({
  type: GET_PATIENT,
  patientId
})

const addPatient = patient => ({
  type: ADD_PATIENT,
  patient
})

//THUNK CREATORS
export const fetchPatients = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/patients')
    const action = getPatients(data)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

export const fetchPatient = patientId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/patients/${patientId}`)
    // console.log('fetchPatient thunk, DATA: ', data);
    const action = getPatient(data)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

export const newPatient = patient => async dispatch => {
  try {
    const {data} = await axios.post('/api/patients')
    const action = addPatient(data)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PATIENTS:
      return {...state, patients: action.patients}

    case GET_PATIENT:
      return {...state, patient: action.patientId}

    case ADD_PATIENT:
      return {...state, patients: [state.patients, action.patient]}

    default:
      return state
  }
}
