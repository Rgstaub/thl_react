//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
// import ('./LeagueSelect.css');
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function LeagueSelect(props) {
  const { currentLeague, allLeagues, handleLeagueSelection } = props;

  const leaguesArr = allLeagues.map( league => {
    if (league.id !== currentLeague.id) {
      return(
        <MenuItem 
          value={league.id} 
          key={league.id}
          name={league.name}
          onClick={handleLeagueSelection}
        >
          {league.name}</MenuItem>
      )
    } else return('')
  });

  return (
    <div>
      <Select
        value={currentLeague.id}
      >
      <MenuItem 
        value={currentLeague.id} 
        key={currentLeague.id}

      >
        {currentLeague.name}</MenuItem>
        {leaguesArr}
      </Select>
    </div>
  );
}

LeagueSelect.propTypes = {
  selectedLeague: PropTypes.object,
  otherLeagues: PropTypes.object,
  selectLeague: PropTypes.func
};

export default LeagueSelect;