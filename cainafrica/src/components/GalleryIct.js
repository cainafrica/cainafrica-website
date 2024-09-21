import React from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar/Toolbar.js";
import { TopImage, TextWrapper, TopHeaderText } from "./StyledComponents.js";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import GalleryHeader3 from "../images/Gallery/GalleryHeader3.jpg";
import B1 from "../images/ICT4U/ICT4U_1.jpeg";
import B3 from "../images/ICT4U/ICT4U_2.jpeg";
import B4 from "../images/ICT4U/ICT4U_3.jpeg";

const PhotoBox = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  display: block;
  minheight: 1rem;
  width: 80%;
  //border:1px solid #ddd;
  border: 0.15rem solid #d8aa35;
  border-radius: 1rem;
  overflow: auto;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
    };
  }

  setCustomTags(i) {
    return i.tags.map((t) => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  }

  render() {
    var images = this.state.images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty("tags") && this.setCustomTags(i)}
        </div>
      );
      return i;
    });
    return (
      <div>
        <TopImage style={{ backgroundImage: `url(${GalleryHeader3})` }}>
          <Toolbar drawerClickHandler={this.props.drawerToggleClickHandler} />
          {this.props.sideDrawer}
          <TextWrapper>
            <TopHeaderText>ICT4U (ICT for the Underprivileged)</TopHeaderText>
          </TextWrapper>
        </TopImage>

        <PhotoBox>
          <Gallery images={images} enableImageSelection={false} />
        </PhotoBox>
      </div>
    );
  }
}

Demo4.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%",
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px",
};

Demo4.defaultProps = {
  images: [
    {
      src: `${B1}`,
      thumbnail: `${B1}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B3}`,
      thumbnail: `${B3}`,
      thumbnailWidth: 524.5,
      thumbnailHeight: 349.7,
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
      src: `${B4}`,
      thumbnail: `${B4}`,
      thumbnailWidth: 524.5,
      // thumbnailHeight: 349.7
      // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
  ],
};

export default Demo4;
