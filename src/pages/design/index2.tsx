import {connect} from "react-redux";
import Design from "./Design2";

const mapState = (state: any) => {
  return state.canvas
}
export default connect(mapState)(Design)