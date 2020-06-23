import React from 'react';
import { FacebookProvider, Feed } from 'react-facebook';

const FacebookWidget = () => {
  return (
    <div className="FacebookWidget">
    <FacebookProvider appId="383887205069436">
        <Feed link="https://www.facebook.com">
        {/* https://www.facebook.com/DHWoodworks/ */}
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      </FacebookProvider>
    </div>
  )
}

export default FacebookWidget;