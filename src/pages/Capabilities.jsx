import React from "react";

const Capabilities = () => {
  return (
    <div className="capabilities-container">
      <div className="cap1">
        <div className="column analysis-support">
          <div className="cap-header">
            <h2>Advanced Analysis Supporting Intelligence Cycle</h2>
          </div>
          <div className="list">
            <ul>
              <li>
                Applications of Artificial Intelligence & Machine Learning
              </li>
              <li>Modeling and quantitative methods</li>
            </ul>
          </div>
          <div className="tasks-header">
            <h2>
              <u>Tasks</u>
            </h2>
          </div>
          <div className="tasks-list">
            <ul>
              <li>Clustering and classification ML modeling</li>
              <li>Predictive analytics</li>
              <li>Target network analysis and optimization</li>
              <li>Time-series forecasting</li>
              <li>Data visualization/Story telling</li>
              <li>Data aggregations and synthesis</li>
            </ul>
          </div>
        </div>

        <div className="column intelligence-workflow">
          <div className="cap-header">
            <h2>Intelligence Workflow Automation</h2>
          </div>
          <div className="list">
            <ul>
              <li>Suited for repeatable, recurring tasks</li>
              <li>Streamline data processing through tool development</li>
              <li>
                Increase accuracy and volume of data used to conduct analysis
              </li>
            </ul>
          </div>
          <div className="tasks-header">
            <h2>
              <u>Tasks</u>
            </h2>
          </div>
          <div className="tasks-list">
            <ul>
              <li>Data aggregations and synthesis</li>
              <li>Query automations via PKI</li>
              <li>
                Compatibility with existing systems and exports (ArcGis, ANB,
                KML, ELSX)
              </li>
              <li>Automate alerting/emailed reports</li>
              <li>Streamlit apps/Jupyter notebooks</li>
            </ul>
          </div>
        </div>

        <div className="column application-development">
          <div className="cap-header">
            <h2>Application Development and Foundational Data Support</h2>
          </div>
          <div className="list">
            <ul>
              <li>
                Lightweight application development providing databases and GUIs
              </li>
              <li>Knowledge management tool development</li>
              <li>Standardized data processing and structuring</li>
            </ul>
          </div>
          <div className="tasks-header">
            <h2>
              <u>Tasks</u>
            </h2>
          </div>
          <div className="tasks-list">
            <ul>
              <li>Streamlit apps/Jupyter notebooks</li>
              <li>Custom dashboards</li>
              <li>Full-stack web applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
