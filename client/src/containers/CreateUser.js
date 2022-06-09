import { connect } from "react-redux";
import CreateUser from "../components/AddCar";
import { createUser } from "../redux/actions";

const matchDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, matchDispatchToProps)(CreateUser)