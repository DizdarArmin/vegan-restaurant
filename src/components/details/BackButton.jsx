import { useHistory } from "react-router-dom";
export default function BackButton() {
  const history = useHistory();
  return (
    <a
      className="btn btn-success button back float-right"
      onClick={() => history.goBack()}
    >
      Go Back
    </a>
  );
}
