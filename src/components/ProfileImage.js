import React, { PropTypes } from 'react';

const ProfileImage = () => {
  return (
    <div>
      <img src="/src/assets/placeholder.svg" className="circle" style={{ width: 95 + '%'}} />
    </div>
  );
};

ProfileImage.defaultName = 'ProfileImage';
ProfileImage.propTypes = {};
ProfileImage.defaultProps = {};

export default ProfileImage;
