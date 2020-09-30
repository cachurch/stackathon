import React from 'react'
import {connect} from 'react-redux'
// import {fetchPatients, fetchPatient} from '../store/patient'
// import {Link} from 'react-router-dom'

export class BehaviorGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    //   // this.handleChange = this.handleChange.bind(this)
    //   // this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    // this.props.fetchPatient(this.props.match.params.patientId)
  }
  render() {
    // const patient = this.props.patient || {}

    return <div id="graph" />
  }
}

const mapState = state => {
  //   return {patient: state.patient.patient}
}
const mapDispatch = dispatch => ({
  //   fetchPatients: () => dispatch(fetchPatients()),
  //   fetchPatient: patientId => dispatch(fetchPatient(patientId))
})

export default connect(mapState, mapDispatch)(BehaviorGraph)
