import { connect } from "react-redux";
import AddUser from "../components/AddUser";
import { AddUser } from "../redux/actions";

const matchDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

export default connect(null, matchDispatchToProps)(AddUser)