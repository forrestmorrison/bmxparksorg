import { connect } from 'react-redux'
import User from '../components/User'

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(User)