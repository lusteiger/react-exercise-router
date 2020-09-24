import React from 'react';

const Profile = (props) => {
  const url = props.location.pathname;

  return (
    <div>
      Username:XXX
      <br />
      Gender:Female
      <br />
      Work:It industy
      <br />
      Website: {`'${url}'`}
    </div>
  );
};

export default Profile;