import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import blog2 from '../images/blog/Blog2.JPG';
import Toolbar from './Toolbar/Toolbar.js';
import { TopImage, TextWrapper, TopHeaderText, TopParaText, Button, NavLink } from './StyledComponents.js';


const PostWrapper = styled.div`
  width: 100%;
  margin: 2rem auto;
`;

const Posts = styled.div`
  margin: 2rem auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.15rem solid #d8aa35;
  border-radius: 1rem;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .post {
    width: 100%;
    max-width: 100%;
    margin-bottom: 2rem;
  }

  .post-content {
    max-width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    word-break: break-word;
    line-height: 1.6;
  }

  .post-content img,
  .post-content iframe {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1rem 0;
  }

  .post-content pre,
  .post-content code {
    white-space: pre-wrap;
    word-break: break-word;
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 0.5rem;
    display: block;
    overflow-x: auto;
  }
`;

const BlogPosts = (props) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cainafrica')
      .then((res) => {
        setPost(res.data.items.filter((item) => item.categories.length > 0));
      })
      .catch((err) => console.log(err));
  }, []);

  const shortenText = (text, startingPoint, maxLength) => {
    return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
  };

  return (
    <div>
      <TopImage style={{ backgroundImage: `url(${blog2})` }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopHeaderText>BLOG</TopHeaderText>
          <TopParaText>
            "BE THE REASON SOMEONE BELIEVES IN THE GOOD OF PEOPLE" - KAREN SALMANSOHN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <PostWrapper>
        <Posts>
          {post.map((postItem) => (
            <div className="post" key={postItem.pubDate}>
              <h2 dangerouslySetInnerHTML={{ __html: postItem.title }} />
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: shortenText(postItem.content, 0, 1000) + '...',
                }}
              />
              <Button>
                <NavLink href={postItem.link} target="_blank" rel="noopener noreferrer">
                  Read on Medium
                </NavLink>
              </Button>
            </div>
          ))}
        </Posts>
      </PostWrapper>
    </div>
  );
};

export default BlogPosts;
