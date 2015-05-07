import React from 'react/addons';

import Panel from '../../../components/Panel';

class AdminDashboard extends React.Component {

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
                <div style={{fontSize: '2rem'}}>23</div>
                <div style={{fontSize: '.8rem'}}>Projects</div>
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
                <div style={{fontSize: '2rem'}}>233</div>
                <div style={{fontSize: '.8rem'}}>Cases</div>
              </div>
            </div>
          </Panel>
        </div>
        <div style={{display: 'flex'}}>
          <Panel title="Projects" actions={true}>
            <table>
              <thead>
              <tr>
                <th>Project</th>
                <th>Cases</th>
                <th>Samples</th>
                <th>Files</th>
                <th>Size</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>TCGA-BRCA</td>
                <td>233</td>
                <td>678</td>
                <td>45</td>
                <td>13.23 GB</td>
              </tr>
              <tr>
                <td>TCGA-BRCA</td>
                <td>233</td>
                <td>678</td>
                <td>45</td>
                <td>13.23 GB</td>
              </tr>
              <tr>
                <td>TCGA-BRCA</td>
                <td>233</td>
                <td>678</td>
                <td>45</td>
                <td>13.23 GB</td>
              </tr>
              <tr>
                <td>TCGA-BRCA</td>
                <td>233</td>
                <td>678</td>
                <td>45</td>
                <td>13.23 GB</td>
              </tr>
              <tr>
                <td>TCGA-BRCA</td>
                <td>233</td>
                <td>678</td>
                <td>45</td>
                <td>13.23 GB</td>
              </tr>
              </tbody>
            </table>
          </Panel>
        </div>
        <div style={{display: 'flex'}}>
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
      </section>
    );
  }
}

export default AdminDashboard;
