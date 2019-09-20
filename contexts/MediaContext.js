/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MediaContext = React.createContext({});
const MediaProvider = (props) => {
  const {
    media: initialMedia,
    user: initialUser,
    children
  } = props;
  const [media, setMedia] = useState(initialMedia);
  const [user, setUser] = useState(initialUser);

  const appContext = {
    user,
    setUser,
    media,
    setMedia,
  };

  return (
    <MediaContext.Provider value={appContext}>
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  media: PropTypes.array,
  user: PropTypes.object,
  children: PropTypes.node,
};

MediaProvider.defaultProps = {
  media: [],
  user: {}
};

export { MediaContext, MediaProvider };
