import axios from 'axios'

//INITIAL STATE
const initialState = {
  patients: [],
  patient: {}
}

//ACTION TYPES
const GET_PATIENTS = 'GET_PATIENTS'
const GET_PATIENT = 'GET_PATIENT'

//ACTION CREATORS
const getPatients = patients => ({
  type: GET_PATIENTS,
  patients
})

const getPatient = patientId => ({
  type: GET_PATIENT,
  patientId
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

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PATIENTS:
      return {...state, patients: action.patients}

    case GET_PATIENT:
      return {...state, patient: action.patientId}

    default:
      return state
  }
}
