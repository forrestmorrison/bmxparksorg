import { connect } from "react-redux";
import Map from "../components/Map";
import { map } from "../redux/actions";

const matchDispatchToProps = (dispatch) => {
    return {
        map: (map) => dispatch(map(map))
    }
}

export default connect(null, matchDispatchToProps)(Map)