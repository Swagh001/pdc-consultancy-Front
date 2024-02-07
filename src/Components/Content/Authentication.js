import { useState,} from 'react';

const Authentication = ({setName,setJob}) => {
  const [flag, setflag] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    password: ''
  });

  let handlesignup = () => {
    setflag(true);
  };
  let handleLogin = () => {
    setflag(false);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const url = flag ? 'http://localhost:8081/signup' : 'http://localhost:8081/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if(response.ok) {
        const data = await response.json();
        console.log(data);
        const token = data.token;
        if (token) {
            localStorage.setItem('data', JSON.stringify({ name: formData.name, job: data.job }));
            localStorage.setItem('flag', true);
            // setName(data.name);
            // setJob(data.job);
            console.log(data);
          }
      }
      else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div id="signuplogin">
        <button onClick={handlesignup}>SignUp</button>
        <button onClick={handleLogin}>LogIn</button>
      </div>
      <div>
        {flag ? (
          <div id="signUp">
            <form onSubmit={handleSubmit}>
              <div className="signuplogincss">
                <label className="labelcss">
                  Name:
                  <input type="text" name="name" onChange={handleChange} />
                </label>
                <br />
                <label className="labelcss">
                  Job:
                  <input type="text" name="job" onChange={handleChange} />
                </label>
                <br />
                <label className="labelcss">
                  password:
                  <input type="text" name="password" onChange={handleChange} />
                </label>
                <br />
              </div>
              <div class="submitbtn">
                <input type="submit" class="submitbtn2" value="Submit" />
              </div>
            </form>
          </div>
        ) : (
          <div id="login">
            <form onSubmit={handleSubmit}>
              <div className="signuplogincss">
                <label className="labelcss">
                  Name:
                  <input type="text" name="name" onChange={handleChange} />
                </label>
                <br />
                <label className="labelcss">
                  password:
                  <input type="text" name="password" onChange={handleChange} />
                </label>
                <br />
              </div>
              <div class="submitbtn">
                <input type="submit" class="submitbtn2" value="Submit" />
              </div>
            </form>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
