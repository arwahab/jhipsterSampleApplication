import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './location-my-suffix.reducer';
import { ILocationMySuffix } from 'app/shared/model/location-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILocationMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class LocationMySuffixDetail extends React.Component<ILocationMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { locationEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Location [<b>{locationEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="streetAddress">Street Address</span>
            </dt>
            <dd>{locationEntity.streetAddress}</dd>
            <dt>
              <span id="postalCode">Postal Code</span>
            </dt>
            <dd>{locationEntity.postalCode}</dd>
            <dt>
              <span id="city">City</span>
            </dt>
            <dd>{locationEntity.city}</dd>
            <dt>
              <span id="stateProvince">State Province</span>
            </dt>
            <dd>{locationEntity.stateProvince}</dd>
            <dt>Country</dt>
            <dd>{locationEntity.countryId ? locationEntity.countryId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/location-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/location-my-suffix/${locationEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ location }: IRootState) => ({
  locationEntity: location.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LocationMySuffixDetail);
