import React, { useEffect, useState } from 'react';
import AppleImg from '../Images/AppleImg.png';
import GitHubImg from '../Images/GitHubImg.png';
import PlayStoreImg from '../Images/PlayStoreImg.jpg';
import ReactImg from '../Images/ReactImg.jpg';
import Authentication from './Authentication';

const Content = () => {
  const [name, setName] = useState('______');
  const [job, setJob] = useState('______');
  const [flag, setFlag] = useState(localStorage.getItem('flag') === 'true');

  // const handleLogout = (flag) => {
  //   localStorage.removeItem('data');
  //   localStorage.setItem('flag', false);
  //   setFlag(false);
  // };

  useEffect(() => {
    if(flag) {
      const data = JSON.parse(localStorage.getItem('data'));
      // if (data) {
        setName(data.name);
        setJob(data.job);
        console.log(data);
      // }
    }
    // else {
      
    //   setName('__');
    //   setJob('__');
    // }
  }, [flag]); 

  return (
    <div style={{ margin: '30px' }}>
      <div id="containerOne">
        <p>
          My Name is, <span id="name">{name}</span>
        </p>
        <p>
          I specialize in as <span id="job">{job}</span> as following shown,
        </p>
        and this is my test submission
      </div>

      <div id="containerTwo">
        <img src={ReactImg} className='iconimg' alt='react' style={{ border: '2px solid green', borderRadius: '10px' }} />
        <img src={GitHubImg} className='iconimg' alt='GitHubImg' style={{ border: '2px solid pink', borderRadius: '10px' }} />
        <img src={AppleImg} className='iconimg' alt='AppleImg' style={{ border: '2px solid red', borderRadius: '10px' }} />
        <img src={PlayStoreImg} className='iconimg' alt='PlayStoreImg' style={{ border: '2px solid blue', borderRadius: '10px' }} />
      </div>

      <div>
        <Authentication setName={setName} setJob={setJob} />
        {/* {flag && <button onClick={handleLogout}>Logout</button>} */}
      </div>
    </div>
  );
};

export default Content;
