import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removePark } from "../redux/actions"

const mapStateToProps = (state) => {
    return {
        user: state.user,
        parks: state.parks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePark: (index) => dispatch(removePark(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)