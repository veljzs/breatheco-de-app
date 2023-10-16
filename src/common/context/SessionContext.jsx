import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { isWindow } from '../../utils';

const initialState = {
  placement: '', // the ad placement
  medium: '', // facebook, tiktok, Instagram, google
  source: '', // cpc, organic, etc.
  term: '', // keyword from cpc
  content: '', // banner or add id
  conversion_url: '', // last URL the user saw before starting the checkout process.
  landing_url: '', // first URL the user saw when coming into the website
  user_agent: '', // front end user agent
};

export const SessionContext = createContext({
  ...initialState,
});

function SessionProvider({ children }) {
  const router = useRouter();
  const { query } = router;
  const [userSession, setUserSession] = useState(initialState);

  // validate non authorized and authorized users session information
  const handleUserSession = () => {
    if (isWindow) {
      const storedSession = JSON.parse(localStorage.getItem('userSession'));
      const { userAgent } = window.navigator;
      const { placement, medium, source, term, content } = query;
      const landingUrl = userSession?.landing_url ? userSession.landing_url : window.location.pathname;
      setUserSession({
        ...storedSession,
        user_agent: userAgent,
        landing_url: landingUrl,
        placement,
        medium,
        source,
        term,
        content,
      });
    }
  };

  useEffect(() => {
    handleUserSession();
  }, []);

  return (
    <SessionContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userSession,
        setUserSession: (session) => {
          localStorage.setItem('userSession', JSON.stringify(session));
          setUserSession(session);
        },
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

SessionProvider.propTypes = {
  children: PropTypes.node,
};

SessionProvider.defaultProps = {
  children: null,
};

export default SessionProvider;
