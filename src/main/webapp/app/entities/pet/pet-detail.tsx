import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { getEntity } from './pet.reducer';
import { IPet } from 'app/shared/model/pet.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPetDetailProps {
  getEntity: ICrudGetAction<IPet>;
  pet: IPet;
  match: any;
}

export class PetDetail extends React.Component<IPetDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { pet } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Pet [<b>{pet.id}</b>]
          </h2>
          <Row size="md">
            <dl className="jh-entity-details">
              <dt>
                <span id="title">Title</span>
              </dt>
              <dd>{pet.title}</dd>
              <dt>
                <span id="price">Price</span>
              </dt>
              <dd>{pet.price}</dd>
            </dl>
          </Row>
          <Button tag={Link} to="/entity/pet" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          <Button tag={Link} to={`/entity/pet/${pet.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ pet }) => ({
  pet: pet.entity
});

const mapDispatchToProps = { getEntity };

export default connect(mapStateToProps, mapDispatchToProps)(PetDetail);
