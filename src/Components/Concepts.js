import Concept from "./UI/Concept";

function Concepts(props) {
  const { concepts } = props;



  return (
    <ul id="concepts">
      <Concept concept={concepts[0]} />
      <Concept concept={concepts[1]} />
      <Concept concept={concepts[2]} />
    </ul>
  );
}

export default Concepts;
