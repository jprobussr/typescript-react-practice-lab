import './ProfileCard.css';
import type { Profile } from '../data/profiles';

type ProfileCardProps = {
  profile: Profile;
};

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <article className="profile-card">
      <div className="profile-card__header">
        <div className="profile-card__avatar">{profile.name.charAt(0)}</div>

        <div>
          <h2>{profile.name}</h2>
          <p className="profile-card__role">{profile.role}</p>
        </div>
      </div>

      <p className="profile-card__location">{profile.location}</p>

      <p
        className={
          profile.isOnline
            ? 'profile-card__status online'
            : 'profile-card__status offline'
        }
      >
        {profile.isOnline ? 'Online' : 'Offline'}
      </p>

      <ul className="profile-card__skills">
        {profile.skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </article>
  );
};

export default ProfileCard;
