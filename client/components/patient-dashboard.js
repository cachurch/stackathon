import React from 'react'
import {connect} from 'react-redux'
import {fetchPatients, fetchPatient} from '../store/patient'
// import {Link} from 'react-router-dom'

export class PatientDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    //   // this.handleChange = this.handleChange.bind(this)
    //   // this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.patientId)
    console.log(
      'this.props.match.params.patientId: ',
      this.props.match.params.patientId
    )
  }
  render() {
    console.log('this.props.patient: ', this.props.patient)
    const patient = this.props.patient || {}

    return (
      <div id="singlePatient">
        {<h1>Patient Dashboard</h1>}
        <img src={patient.imageUrl} height="150" width="" />
        <h2>{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>Medical History: {patient.medicalHistory}</p>
        <p>Notes: {patient.notes}</p>
      </div>
    )
  }
}

const mapState = state => {
  console.log('patient: ', state.patient.patient)
  return {patient: state.patient.patient}
}
const mapDispatch = dispatch => ({
  fetchPatients: () => dispatch(fetchPatients()),
  fetchPatient: patientId => dispatch(fetchPatient(patientId))
})

export default connect(mapState, mapDispatch)(PatientDashboard)
