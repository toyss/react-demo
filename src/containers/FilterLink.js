import { connect } from 'react-redux';

import visibilityFilterAction from '../redux/actions/visibilityFilter';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(visibilityFilterAction.set(ownProps.filter))
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
