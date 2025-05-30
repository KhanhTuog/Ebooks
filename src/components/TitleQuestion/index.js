import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import HeadPhone from './HeadPhone';

const TitleQuestion = ({ titleQuestion }) => {
  const renderStar = React.useCallback(() => {
    const star = titleQuestion[0].star;
    if (!star) return null;
    return (
      <div style={{
        height: 30,
        width: 110,
        borderRadius: 10,
        marginRight: 5,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: titleQuestion[0].color ?? '#33B1D6',
      }}>
        {Array(star).fill(<i class="far fa-star" style={{ color: 'white', padding: 5, fontSize: 20 }} />)}
      </div>
    );
  }, [titleQuestion])
  //
  const renderTrack = React.useCallback(() => {
    const track = titleQuestion[0].track;
    if (!track) return null;
    return (
      <div style={{ display: 'inline-block', position: 'relative', bottom: 2, marginRight: 5, textAlign: 'center', color: '#241B1A' }}>
        <img src='img/track_icon.png' alt='...' style={{ width: '70px' }} />
        <span style={{ fontSize: 16, position: 'absolute', right: '10px', top: '10px' }}>{track}</span>
      </div>
    )
  }, [titleQuestion])
  //
  const transform = React.useCallback((node, index) => {
    //<headphone name="01" src="img/FriendsPlus/Page9/Audio/tieude.e1.mp3"></headphone>
    if (node.type === "tag" && node.name === "headphone") {
      const { name, src } = node.attribs
      return (<React.Fragment key={index}><HeadPhone name={name} src={src} /></React.Fragment>);
    }

  }, []);
  //
  if (!titleQuestion) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, position: 'relative', left: -30 }}>
      <span style={{ paddingTop: 5, fontSize: 30, fontWeight: '600', color: titleQuestion[0].color ?? '#33B1D6', }}>
        {titleQuestion[0].num}
      </span>
      <div style={{
        fontSize: 25,
        minWidth: 200,
        marginLeft: 15,
        marginTop: 10,
        display: 'inline-block',
        color: '#302E2F',
        fontWeight: '600',
        // fontFamily: 'Rubik-Medium',
      }}>
        {renderStar()}
        {renderTrack()}
        <span>{ReactHtmlParser(titleQuestion[0].title, { transform })}</span>
      </div >
    </div >
  )
}

export default TitleQuestion;