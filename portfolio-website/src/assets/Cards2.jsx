import { Card } from "react-bootstrap";
import Responsibilities from "./Res";

function ResCards() {
  return (
    <div className="Cards">
      {Responsibilities.map((exp) => (
        <Card
          className="card-pane"
          key={exp.id}
          style={{ width: "314px", height: "300px" }}
        >
          <Card.Img className="Exp-Img" variant="top" src={exp.image} />
          <Card.Body>
            <Card.Text className="Exp-Text">{exp.name}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ResCards;
