import PropTypes from 'prop-types'

function Employee(props) {
    let {fnm, lnm, city} = props.emp
    return (
        <>
            <h1>Employee Details</h1>
            <p>{JSON.stringify(props)}</p>
            <p>Employee First Name: {props.emp.fnm}</p>
            <p>Employee Last Name: {props.emp.lnm}</p>
            <p>Employee City: {props.emp.city}</p>
            {fnm} - {lnm} - {city}
            <button onClick={(e) => submitPage(e)}>Click Me</button>
        </>
    )
}

function submitPage(e){
    e.preventDefault();
    console.log("Clicked : " + e)
}

Employee.propTypes = {
    emp: PropTypes.object.isRequired,
}

export default Employee