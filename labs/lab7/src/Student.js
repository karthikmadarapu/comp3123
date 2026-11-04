import React, { Component } from "react"
import PropTypes from 'prop-types'
//https://reactjs.org/docs/typechecking-with-proptypes.html
class Student extends React.Component{

    static defaultProps = {
        //fnm: PropTypes.string.isRequired,
        lnm: "NO last name",
        result: "NO result",
        city: "Toronto"
    }

    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <h2>Student Information</h2>
                <p>{JSON.stringify(this.props)}</p>
                <p>Student First Name: {this.props.fnm}</p>
                <p>Student Last Name: {this.props.lnm}</p>
                <p>Student Result: {this.props.result}</p>
            </>
        )
    }
}

Student.propTypes = {
    sid:PropTypes.number,
    fnm: PropTypes.string.isRequired,
    lnm: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
    city: PropTypes.string,
}

// Student.defaultProps = {
//     //fnm: PropTypes.string.isRequired,
//     lnm: "NO last name",
//     result: "NO result",
//     city: "Toronto"
// }

export default Student