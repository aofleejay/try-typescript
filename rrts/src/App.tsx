import React from 'react'
import { connect } from 'react-redux'
import { StoreState } from './redux/store'
import { Todo, fetchTodos, deleteTodo } from './redux/todos'

interface AppProps {
  todos: Todo[]
  fetchTodos: () => void
  deleteTodo: (id: number) => void
}

class App extends React.Component<AppProps> {
  state = { fetching: true }

  componentDidMount() {
    this.props.fetchTodos()
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
  }

  render() {
    if (this.state.fetching) return 'Loading...'

    return (
      <ul>
        {this.props.todos.map(({ id, title }) => (
          <li key={id}>
            <span>{title}</span>
            <button onClick={() => this.props.deleteTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState) => ({ todos })

const mapDispatchToProps = { fetchTodos, deleteTodo }

export default connect(mapStateToProps, mapDispatchToProps)(App)
