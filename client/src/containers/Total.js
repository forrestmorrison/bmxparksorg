import { connect } from 'react-redux'
import Total from '../components/Total'

const mapStateToProps = (state) => {
    return {
        parks: state.parks
    }
}

export default connect(mapStateToProps)(Total)