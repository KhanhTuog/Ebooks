import React from 'react'
import { Container, Row } from 'reactstrap';
import TitleQuestion from '../../TitleQuestion';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import FooterModal from '../../FooterModal';

const VideoType = (props) => {

  if (!props) return null;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 200 }}>
        <TitleQuestion titleQuestion={props.titleQuestion} />
      </Row>
      <Player
        // playsInline
        poster="/assets/poster.png"
        src={props.video}
      />
       <FooterModal isDisabledRetry isDisabledSubmit audioUrl={props.audio} />
    </Container>
  )
}
export default VideoType