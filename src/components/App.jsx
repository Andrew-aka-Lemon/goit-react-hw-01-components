import { Profile } from 'components/Profile/Profile';
import user from '../user.json';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats}
      views={user.stats}
      likes={user.stats}
    ></Profile>
  );
};
