// TODO:
// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    // setAuthToken
    setAuthToken(localStorage.token);
  }

  try {
    // This will hit api route to get user data from User model
    // finds user data for id req.user.id
    // const res = await axios.get('/api/auth');
    const res = {};

    // Calls redux reducer that sets the user/logged in club id in app state
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// TODO:
// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    // Once we have routes, it will create a new user on backend
    // and will return signed jwt
    // const res = await axios.post('/api/users', body, config);
    const res = {};

    // Calls redux reducer that puts the token into local storage
    // and token and isAuthenticated=true in app state
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    // Load user into app state
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};

// TODO:
// Login User

// TODO:
// Logout / clear profile

// TODO:
// Forgot password
