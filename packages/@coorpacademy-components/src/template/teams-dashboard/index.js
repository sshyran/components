import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import MoocHeader from '../../organism/mooc-header';
import Cta from '../../atom/cta';
import CardsList from '../../molecule/dashboard/cards-list';
import style from './style.css';

const TeamsDashboard = ({logo, platformLink, sections}) => {
  const buildSection = (section, index) => {
    return <CardsList {...section} key={section.title + index} />;
  };
  const sectionsList = map(buildSection, sections);
  return (
    <div data-name="teams-dashboard" className={style.teamsDashboard}>
      <MoocHeader logo={logo} links={[platformLink]} />
      {sectionsList}
    </div>
  );
};

TeamsDashboard.propTypes = {
  logo: MoocHeader.propTypes.logo,
  platformLink: PropTypes.shape(Cta.propTypes),
  sections: PropTypes.arrayOf(PropTypes.shape(CardsList.propTypes))
};

export default TeamsDashboard;
