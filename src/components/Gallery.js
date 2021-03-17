import React from "react";
import styled from "styled-components";

const Gallery = ({images}) => {
 
  return (
    <Wrapper className="product-gallery">
        <img src={images[0].url} alt="product"/>
      <div className="album">
      {images.slice(1,5).map((image, index)=> {
          return (
                <img className="main" key={index} src={image.url} alt="main" />
              )
            })}
       </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    .album{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: .5rem
    }

    .album-image{
        height: 160px
    }

    .main{
      height: 100px
    }
`

export default Gallery