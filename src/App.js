import './App.css';
import Users from "./components/Users/Users";
import Menu from './components/menu/Menu';

export default function App() {
  return (
    <div>
        <Menu
            pages={['users page','comments page', 'posts page']}
        classes ={['aaa', 'bbbb']}
        />
        <Users/>
        <Menu pages={['about', 'team']}
        classes={ ['asd','qcc']}/>
    </div>
  );
}

