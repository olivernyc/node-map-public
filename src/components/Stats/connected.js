import { connect } from "react-redux";
import PureComponent from "./component";

const mapStateToProps = (state, ownProps) => ({
	statusCounts: state.statusCounts,
	filters: state.filters
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PureComponent);
