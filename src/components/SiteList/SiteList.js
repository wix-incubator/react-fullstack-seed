import React, {PropTypes, Component} from 'react';

class SiteList extends Component {
  static propTypes = {
    sites: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchSites: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchSites();
  }

  render() {
    const {sites, loading} = this.props;

    if (loading) {
      return (
        <div>
          <h2>{'loading...'}</h2>
        </div>
      );
    }

    return (
      <div>
        <h2>{'site list'}</h2>
        <ul>
          {sites.map(site =>
            <li className="site" data-hook="site" key={site.id}>{site.siteName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default SiteList;
