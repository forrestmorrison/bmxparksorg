import { connect } from "react-redux";
import AddPark from "../components/AddPark";
import { addPark } from "../redux/actions";

const matchDispatchToProps = (dispatch) => {
    return {
        addPark: (park) => dispatch(addPark(park))
    }
}

export default connect(null, matchDispatchToProps)(AddPark)