import React from 'react';

function Login() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col s12 m7'>
                <div className='card'>
                    <div className='card-content center'>
                        {/* <a href="/auth/openidconnect/return">User account link</a> */}
                         <form action='/auth/openidconnect/return' method='get'>
                            <div>
                                <label>Log in using your email or create a new account using your email</label>
                                <input type='submit' name='openidconnect_identifier'/>
                                <br/>
                                {/* <input type='submit' value='Sign In'/> */}
                            </div>
                        </form>
                    </div>

                    <div className='card-action'>
                    <a href='/'>Home</a>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}

export default Login;
