import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import { TodoActions } from "../actions";
import { Actions } from "../actions/constants";
import { Todo } from "../constants/Todo";

interface AppProps {
  todos: Todo[];
  actions: Actions;
}

const App = ({todos, actions}: AppProps) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
)

const mapStateToProps = (state: { todos: Todo[] }) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<{ todos: Todo[] }>) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
