import {connect} from 'react-redux';
import SiteList from './../../components/SiteList/SiteList';
import {fetchSites} from './../../actions';

function mapStateToProps(state) {
  return {
    sites: state.sites.list,
    loading: state.sites.loading
  };
}

export default connect(mapStateToProps, {fetchSites})(SiteList);
