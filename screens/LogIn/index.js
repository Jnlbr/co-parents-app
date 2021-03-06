import LogIn from './login';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/user';
import { setEvents } from '../../redux/actions/event';
import { setChildren } from '../../redux/actions/child';
import { setCoParents } from '../../redux/actions/parent';

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setData: ({ children, coParents, events }) => {
    dispatch(setEvents(events));
    dispatch(setChildren(children));
    dispatch(setCoParents(coParents));
  }
});

export default connect(null, mapDispatchToProps)(LogIn);