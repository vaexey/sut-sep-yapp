import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ dodano Link
import '../styles/Browse.css';

const Browse = () => {
  const navigate = useNavigate();

  const allUsers = [
    'alice123',
    'bob_the_builderdsdsdss',
    'charlie88',
    'deltaQueen',
    'echo_91',
    'foxtrotX',
    'gamma_ray',
    'harrypotter',
    'isabella99',
    'jack_sparrow',
    'karen42',
    'luna_lovegood',
    'maverickTop',
    'neoMatrix',
    'olivia_cole',
    'peter_parker',
    'queenBee',
    'rockyBalboa',
    'samanthaFox',
    'tonyStark',
    'umbrellaCorp',
    'viktor123',
    'wandaVision',
    'xavierDark',
    'yasmine_star',
    'zeldaFan',
    'andrew.k',
    'beatrix_lee',
    'crimson_tide',
    'danny.dev',
    'elena_milano',
    'freddieM',
    'greg_the_great',
    'hannah_banana',
    'ivan_coder',
    'jessica_23',
    'kevin07',
    'lil_dragon',
    'mira_rose',
    'noah_wolf',
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(allUsers);

  const handleSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const results = allUsers.filter((user) => user.toLowerCase().includes(lowerCaseTerm));
    setFilteredUsers(results);
  };

  return (
    <div className="browse">
      <div className="leftCol">
        <p className="title">Yapp</p>
        <p className="description">Type user you want to search for</p>
        <button className="backButton" onClick={() => navigate('/')}>
          Back
        </button>
      </div>
      <div className="rightCol">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search"
            className="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="backButton" onClick={handleSearch}>
            Submit
          </button>
        </div>

        <div className="userList">
          {filteredUsers.map((user, index) => (
            <Link to={`/profile/${user}`} className="userItem" key={index}>
              {' '}
              <div className="userIcon">🙋‍♂️</div>
              <span className="username">{user}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
