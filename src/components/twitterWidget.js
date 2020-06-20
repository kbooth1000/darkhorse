import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const TwitterWidget = () => {
  return (
    <div className="TwitterWidget">
    <TwitterTimelineEmbed
  sourceType="profile"
  screenName="StudioDarkHorse"
  options={{height: 400}}
/>
    </div>
  )
}

export default TwitterWidget;