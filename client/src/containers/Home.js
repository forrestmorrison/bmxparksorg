import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        parks: state.parks
    }
}

export default connect(mapStateToProps)(Home)