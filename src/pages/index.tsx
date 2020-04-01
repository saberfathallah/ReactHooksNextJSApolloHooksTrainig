import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Navbar from '../component/navbar';
import Login from '../component/login';
import Categories from '../component/categories';
import PostsContainer from '../component/postsContainer';
import UserContext from "../context/userContext";

const HomePage: React.FC<{}> = () => {
  const { isAuth } = React.useContext(UserContext);

  if (isAuth) {
    return ( 
      <div>
        <Navbar />
        <Grid container>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={3}>
            <Categories />
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={9}>
            <PostsContainer />
          </Grid>
        </Grid>
      </div>
    )
  }
  return <Login />
}

export default HomePage;
