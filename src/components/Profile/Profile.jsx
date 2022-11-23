import PropTypes from 'prop-types';
import {
  ProfileItem,
  Description,
  Avatarka,
  Username,
  Tag,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from 'components/Profile/Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileItem>
      <Description className="">
        <Avatarka src={avatar} alt="User avatar" className="avatar" />
        <Username className="name">{username}</Username>
        <Tag className="tag">@{tag}</Tag>
        <Tag className="location">{location}</Tag>
      </Description>

      <Stats className="stats">
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileItem>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
