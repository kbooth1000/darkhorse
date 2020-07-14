import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import '../styles/twitStyles.css';

const TwitterWidget = () => {
  const action = ()=>console.log("ACTION");
  return (
    <div className="TwitterWidget">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="StudioDarkHorse"
        options={{ height: 400, transparent: true, background: 'transparent' }}
        linkColor="#909"
        onComplete={action}
        transparent={true}
        noBorders={true}
      />

      <a href="https://twitter.com/StudioDarkHorse" className="link-tile"><span className="twitter-logotype">Follow us on Twitter</span></a>
    </div>
  )
}

export default TwitterWidget;