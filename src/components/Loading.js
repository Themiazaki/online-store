import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Loading = () => {
    return(
        <LoadingSection>
            <ReactLoading className="loading" type="spinningBubbles" color="var(--color-primary" />
        </LoadingSection>
    )
}
const LoadingSection = styled.section`
    height: 350px;
    display: flex;
    align-items: center;
    .loading{
        margin: 0 auto;

    }
`
export default Loading;