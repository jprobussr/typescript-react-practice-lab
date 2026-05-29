import { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import { profiles } from './data/profiles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter((profile) => {
    const searchValue = searchTerm.toLowerCase();

    return (
      profile.name.toLowerCase().includes(searchValue) ||
      profile.role.toLowerCase().includes(searchValue) ||
      profile.location.toLowerCase().includes(searchValue) ||
      profile.skills.some((skill) => {
        return skill.toLowerCase().includes(searchValue);
      })
    );
  });

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">React + TypeScript</p>
        <label htmlFor="profile-search" className="search-label">
          Search profiles
        </label>

        <input
          type="text"
          className="search-input"
          value={searchTerm}
          id="profile-search"
          placeholder="Search by name, role, location, or skill"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <h1>Profile Card Lab</h1>
        <p>Practicing typed data, reusable components, and professional UI</p>
      </section>

      <section className="profile-grid">
       {filteredProfiles.length > 0 ? (
        filteredProfiles.map((profile) => {
          return <ProfileCard key={profile.id} profile={profile} />
        })
       ) : (
        <p className="empty-message">No profiles match your search.</p>
       )}
      </section>
    </main>
  );
};

export default App;
