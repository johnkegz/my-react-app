import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import Todo from './Todo'
import Post from './Post'



export const AppRoutes = () => {
    return (<Router>
        <nav>
        {/* Navigation Links */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Post</Link>
          </li>
        </ul>
      </nav>

        <Routes>
            <Route path='/' element={<Todo />}/>
            <Route path='/posts' element={<Post />}/>
        </Routes>
    </Router>)
}