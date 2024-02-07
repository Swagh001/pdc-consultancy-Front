import {useState} from 'react'

const Authentication = () => {
    const [flag,setflag]=useState(false);
    let handlesignup=(()=>{
        setflag(true);
    })
    let handleLogin=(()=>{
        setflag(false);
    })
  return (
    <div>
        <div id='signuplogin'>
            <button onClick={handlesignup}>SignUp</button>
            <button onClick={handleLogin}>LogIn</button>
        </div>
        <div>
            {flag
            ?
            <div id='signUp'>
                <form>
                    <div className='signuplogincss'>
                        <label className='labelcss'>
                            Name:
                        
                            <input type="text" name="name" />
                        </label>
                        <br/>
                        <label className='labelcss'>
                            Job:
                        
                            <input type="text" name="Job" />
                        </label>
                        <br/>
                        <label className='labelcss'>
                            password:
                            <input type="text" name="password" />
                        </label>
                        <br/>
                    </div>
                    <div class="submitbtn"><input type="submit" class="submitbtn2" value="Submit" /></div>
                </form>
            </div>
            :
            <div id='login'>
                <form>
                    <div className='signuplogincss'>
                        <label className='labelcss'>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <br/>
                        <label className='labelcss'>
                            password:
                            <input type="text" name="password" />
                        </label>
                        <br/>
                    </div>
                    <div class="submitbtn"><input type="submit" class="submitbtn2" value="Submit" /></div>
                </form>
            </div>
            }
        </div>
    </div>

  )
}

export default Authentication
