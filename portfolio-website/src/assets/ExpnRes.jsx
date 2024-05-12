import { Tab, Tabs } from "react-bootstrap";
import Card1 from "./Cards";
import Card2 from "./Cards2";

function Experience() {
  return (
    <div className="Tab-container">
      <h1>Experience and Responsibilities</h1>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-8 Tabs"
        justify
      >
        <Tab eventKey="home" title="Experience">
          <div className="tab-pane">
            <Card1 />
          </div>
        </Tab>
        <Tab eventKey="profile" title="Responsibilities">
          <div className="tab-pane">
            <Card2 />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Experience;
