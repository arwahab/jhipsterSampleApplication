import * as React from 'react';
import { DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name="Entities" id="entity-menu">
    <DropdownItem tag={Link} to="/entity/region-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Region My Suffix
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/country-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Country My Suffix
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/location-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Location My Suffix
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/department-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Department My Suffix
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/task-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Task My Suffix
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/employee-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Employee My Suffix
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/job-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Job My Suffix
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/job-history-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp; Job History My Suffix
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
