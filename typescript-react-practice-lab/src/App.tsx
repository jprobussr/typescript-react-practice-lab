import { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import { profiles } from './data/profiles';

type StatusFilter = 'all' | 'online' | 'offline';
type SortOption = 'default' | 'name-asc' | 'name-desc';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const filteredProfiles = profiles.filter((profile) => {
    const searchValue = searchTerm.toLowerCase();

    const matchesSearch =
      profile.name.toLowerCase().includes(searchValue) ||
      profile.role.toLowerCase().includes(searchValue) ||
      profile.location.toLowerCase().includes(searchValue) ||
      profile.skills.some((skill) => {
        return skill.toLowerCase().includes(searchValue);
      });

    const matchStatus =
      statusFilter === 'all' ||
      (statusFilter === 'online' && profile.isOnline) ||
      (statusFilter === 'offline' && !profile.isOnline);

    return matchesSearch && matchStatus;
  });

  const sortedProfiles = [...filteredProfiles].sort(
    (firstProfile, secondProfile) => {
      if (sortOption === 'name-asc') {
        return firstProfile.name.localeCompare(secondProfile.name);
      }

      if (sortOption === 'name-desc') {
        return secondProfile.name.localeCompare(firstProfile.name);
      }

      return 0;
    },
  );

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

        <label htmlFor="status-filter" className="filter-label">
          Filter by status
        </label>

        <select
          id="status-filter"
          className="filter-select"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value as StatusFilter);
          }}
        >
          <option value="all">All profiles</option>
          <option value="online">Online only</option>
          <option value="offline">Offline only</option>
        </select>

        <label htmlFor="sort-option" className="filter-label">
          Sort profiles
        </label>

        <select
          id="sort-option"
          className="filter-select"
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value as SortOption);
          }}
        >
          <option value="default">Default Value</option>
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
        </select>

        <h1>Profile Card Lab</h1>
        <p>Practicing typed data, reusable components, and professional UI</p>
      </section>

      <p className="results-count">
        Showing {filteredProfiles.length} of {profiles.length} profiles
      </p>

      <section className="profile-grid">
        {sortedProfiles.length > 0 ? (
          sortedProfiles.map((profile) => {
            return <ProfileCard key={profile.id} profile={profile} />;
          })
        ) : (
          <p className="empty-message">No profiles match your search.</p>
        )}
      </section>
    </main>
  );
};

export default App;
