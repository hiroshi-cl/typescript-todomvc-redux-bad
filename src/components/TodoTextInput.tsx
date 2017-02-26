import * as React from "react";
import * as classnames from "classnames";

export interface TodoTextInputProps {
  onSave: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

export interface TodoTextInputState {
  text: string;
}

export class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {

  constructor(props: TodoTextInputProps) {
    super(props);
    this.state = {
      text: props.text || ""
    };
  }

  handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: "" })
      }
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value })
  }

  handleBlur: React.FocusEventHandler<HTMLInputElement> = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.currentTarget.value)
    }
  }

  render() {
    return (
      <input className={
        classnames({
          "edit": this.props.editing,
          "new-todo": this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
