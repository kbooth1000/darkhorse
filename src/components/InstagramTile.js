import React, {useState, useEffect} from 'react';
import InstagramEmbed from 'react-instagram-embed';

const ACCESS_TOKEN = 'IGQVJWLS1hajhab634hgdf83hjdj2EpUTlpwQVlfcVBjanNrZAmRmNWVHejRCQnh4NlVEMWc2b2owUGVkTFlaOGFIT1hvM29kX3JyaXpPTUJiYmpEb2N4aE1KLUg0VFEzb256Y3pCNm50emd3UGlwSGlR';

const InstagramTile = () => {
  const [instaData, setInstaData] = useState(null);

  const getInstaData = async (url = '', data = {})=> {
    return await fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`
    ).json();
  }

  
  return (
    <div className="InstagramTile">
    
      <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/' //https://www.instagram.com/darkhorsewoodworks/
        maxWidth={73}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />

    </div>
  )
}

export default InstagramTile;