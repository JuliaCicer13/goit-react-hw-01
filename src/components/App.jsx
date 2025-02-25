import './App.module.css'
import Profile from './Profile.jsx';
import userData from "../userData.json";


export default function App () {
  const {username, tag, location, avatar, status } = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={status}
      />
    </>
  );
};

