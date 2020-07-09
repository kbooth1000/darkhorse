import React from 'react'
import { Twitter, Pinterest, Facebook } from 'react-social-sharing'
const style = {
  borderRadius: '50%',
  width: '28px',
  height: '28px',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export default props => <div className="social-sharing">
  <h3>Share this:</h3>
  <section>
    <Twitter solid small link={props.pageLink} style={style} />
    <Pinterest solid small link={props.pageLink} style={style} />
    <Facebook solid small link={props.pageLink} style={style} />
  </section>
</div>