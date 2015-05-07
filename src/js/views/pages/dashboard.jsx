import React from 'react/addons';

import Panel from '../../components/Panel';

class UserDashboard extends React.Component {

  render() {
    return (
      <section>
        <div style={{display: 'flex'}}>
          <Panel actions={true}>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '1rem'
            }}>
              <div>
                <i className="fa fa-user fa-4x"></i>
              </div>
              <div style={{marginLeft: '2rem'}}>
                <div style={{fontSize: '2rem'}}>233</div>
                <div style={{fontSize: '.8rem'}}>Cases</div>
              </div>
            </div>
          </Panel>
          <Panel actions={true}>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '1rem'
            }}>
              <div>
                <i className="fa fa-stethoscope fa-4x"></i>
              </div>
              <div style={{marginLeft: '2rem'}}>
                <div style={{fontSize: '2rem'}}>678</div>
                <div style={{fontSize: '.8rem'}}>Biospecimen</div>
              </div>
            </div>
          </Panel>
          <Panel actions={true}>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '1rem'
            }}>
              <div>
                <i className="fa fa-file fa-4x"></i>
              </div>
              <div style={{marginLeft: '2rem'}}>
                <div style={{fontSize: '2rem'}}>45</div>
                <div style={{fontSize: '.8rem'}}>Files</div>
              </div>
            </div>
          </Panel>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', flexDirection: 'column', flex: '1'}}>
            <Panel title="Cases" actions={true}>
              <table>
                <thead>
                <tr>
                  <th>Case</th>
                  <th>Project</th>
                  <th>Submitted</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>TCGA-BRCA</td>
                  <td>2015-06-07</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>TCGA-BRCA</td>
                  <td>2015-06-07</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>TCGA-BRCA</td>
                  <td>2015-06-07</td>
                </tr>
                </tbody>
              </table>
            </Panel>
            <Panel title="Biospecimen" actions={true}>
              <table>
                <thead>
                <tr>
                  <th>Biospecimen</th>
                  <th>Project</th>
                  <th>Submitted</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>TCGA-BRCA</td>
                  <td>2015-06-07</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>TCGA-BRCA</td>
                  <td>2015-06-07</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>TCGA-BRCA</td>
                  <td>2015-06-07</td>
                </tr>
                </tbody>
              </table>
            </Panel>
          </div>
          <div style={{display: 'flex', flex: '1'}}>
            <Panel title='Timeline' actions={true}>
              <ul>
                <li className="submitted">
                  <p>07/2015 - 07/2016</p>
                  <p>
                    Case 3
                    <span>TCGA-BRCA, Submitted</span>
                  </p>
                </li>
                <li className="deleted">
                  <p>07/2014 - 07/2015</p>
                  <p>
                    Biospecimen 4
                    <span>TCGA-BRCA, Deleted</span>
                  </p>
                </li>
                <li className="submitted">
                  <p>07/2013 - 07/2014</p>
                  <p>
                    Biospecimen 3
                    <span>TCGA-BRCA, Submitted</span>
                  </p>
                </li>
                <li className="updated">
                  <p>07/2012 - 07/2013</p>
                  <p>
                    Case 2
                    <span>TCGA-BRCA, Updated</span>
                  </p>
                </li>
                <li className="submitted">
                  <p>07/2011 - 07/2012</p>
                  <p>
                    Case 2
                    <span>TCGA-BRCA, Submitted</span>
                  </p>
                </li>
              </ul>
            </Panel>
          </div>
        </div>
      </section>
    );
  }
}

export default UserDashboard;

