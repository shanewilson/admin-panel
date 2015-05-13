import React from 'react/addons';

import UIAction from '../../actions/UIActions';

import { Column, Row, Flex } from '../../components/Grid';
import FlashCard from '../../components/FlashCard';
import Panel from '../../components/Panel';

class UserDashboard extends React.Component {
  constructor() {
    super();

    this.registerCases = this.registerCases.bind(this);
    this.uploadCases = this.uploadCases.bind(this);
  }

  registerCases() {
    UIAction.toastAdd({
      children: <div>Register Cases</div>
    });
  }

  uploadCases() {
    UIAction.flyoutOpen({
      title: <div><i className="fa fa-upload"></i> Upload Cases</div>,
      children: <div>Upload Cases</div>
    });
  }

  registerBiospecimen() {
    UIAction.flyoutOpen({
      title: <div><i className="fa fa-clipboard"></i> Register Biospecimen</div>,
      children: <div>Register Biospecimen</div>
    });
  }

  uploadBiospecimen() {
    UIAction.flyoutOpen({
      title: <div><i className="fa fa-upload"></i> Upload Biospecimen</div>,
      children: <div>Upload Biospecimen</div>
    });
  }

  deleteBlock() {

  }

  render() {
    return (
      <article>
        <Row>
          <Column>
            <Row>
              <FlashCard
                image={<i className="fa fa-user fa-4x"></i>}
                title='Cases'
                value='233'
                />
              <FlashCard
                image={<i className="fa fa-stethoscope fa-4x"></i>}
                title='Biospecimen'
                value='678'
                />
              <FlashCard
                image={<i className="fa fa-file fa-4x"></i>}
                title='Files'
                value='45'
                />
            </Row>
            <Row>
              <Column>
                <Row>
                  <Panel title="Cases" actions={true}>
                    <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flex: 1}}>
                      <button onClick={this.registerCases}><i className="fa fa-clipboard"></i> Register Cases</button>
                      <button onClick={this.uploadCases}><i className="fa fa-upload"></i> Upload Cases</button>
                    </div>
                  </Panel>
                </Row>
                <Row>
                  <Panel title="Biospecimen" actions={true}>
                    <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flex: 1}}>
                      <button onClick={this.registerBiospecimen}><i className="fa fa-clipboard"></i> Register
                        Biospecimen
                      </button>
                      <button onClick={this.uploadBiospecimen}><i className="fa fa-upload"></i> Upload Biospecimen
                      </button>
                    </div>
                  </Panel>
                </Row>
              </Column>
              <Column>
                <Row>
                  <Panel title='Timeline' actions={true}>
                    <ul>
                      <li className="submitted">
                        <p>2015-06-07</p>

                        <p>
                          Case 3
                          <span>TCGA-BRCA, Submitted</span>
                        </p>
                      </li>
                      <li className="deleted">
                        <p>2015-06-07</p>

                        <p>
                          Biospecimen 4
                          <span>TCGA-BRCA, Deleted</span>
                        </p>
                      </li>
                      <li className="submitted">
                        <p>2015-06-07</p>

                        <p>
                          Biospecimen 4
                          <span>TCGA-BRCA, Submitted</span>
                        </p>
                      </li>
                      <li className="updated">
                        <p>2015-06-07</p>

                        <p>
                          Case 2
                          <span>TCGA-BRCA, Updated</span>
                        </p>
                      </li>
                      <li className="submitted">
                        <p>2015-06-07</p>

                        <p>
                          Case 2
                          <span>TCGA-BRCA, Submitted</span>
                        </p>
                      </li>
                    </ul>
                  </Panel>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </article>
    );
  }
}

export default UserDashboard;

