import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Utility/Loading';

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { data: profile, isLoading } = useQuery("userProfile", () =>
    fetch(`http://localhost:5000/users?email=${user?.email}`).then((res) => res.json())
  );
  console.log(profile);
  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>My profile:</h2>
      {
        profile.map(detail => {
          return <form action="">
            
          </form>
        } )
    }
    </div>
  );
};

export default MyProfile;