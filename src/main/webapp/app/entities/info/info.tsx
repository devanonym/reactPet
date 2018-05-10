
import * as React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { getEntity } from './info.reducer';
import { IInfo } from 'app/shared/model/info.model';

// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { Media, Col, Row } from 'reactstrap';

export interface IInfoProps {
    info: IInfo;
}

export default class Info extends React.Component<IInfoProps> {

  render() {
    return (
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <Media>
            <Media left href="#" className="pad-right-20 pad-top-5">
              <img src={ require('./logo-jhipster.png') } alt="jhipster logo"/>
            </Media>
            <Media body>
            <Media heading>
              About yourself
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
             sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Col>
        </Row>
    );
  }
}
