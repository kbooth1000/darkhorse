import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import '../styles/twitStyles.css';

const TwitterWidget = () => {
  return (
    <div className="TwitterWidget">
    <TwitterTimelineEmbed
  sourceType="list"
  ownerScreenName="StudioDarkHorse"
  options={{height: 350}}
/>

<a href="https://twitter.com/StudioDarkHorse" className="link-tile"><span className="twitter-logotype">Follow us on Twitter</span></a>
    </div>
  )
}

export default TwitterWidget;