import { connect } from 'react-redux'
import Park from '../components/Park'

const mapStateToProps = (state) => {
    return {
        parks: state.parks
    }
}

export default connect(mapStateToProps)(Park)