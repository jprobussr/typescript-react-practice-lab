import './App.css';
import ProfileCard from './components/ProfileCard';
import { profiles } from './data/profiles';



const App = () => {
  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">React + TypeScript</p>
        <h1>Profile Card Lab</h1>
        <p>Practicing typed data, reusable components, and professional UI</p>
      </section>

      <section className="profile-grid">
        {profiles.map((profile) => {
          return (
           <ProfileCard
            key={profile.id}
            profile={profile}
           />
          );
        })}
      </section>
    </main>
  );
};

export default App;
