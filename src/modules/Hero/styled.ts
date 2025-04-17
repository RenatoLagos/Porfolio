import styled from "@emotion/styled";
import { Image, PaineTowers } from "@static/images";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const HeroWrapper = styled.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 0;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.8;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%);
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);

    p, h1, h2, h3, h4, h5, h6, span, strong, b {
        color: white !important;
    }
`;

export const HeroImageStyled = styled(Image)`
    border-radius: 100%;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);

    ${MediaQuery.max("md")} {
        width: 200px;
        height: 200px;
    }
`;

export const PreHeading = styled.p`
    color: white !important;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

export const HeroTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: white !important;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

export const HeroDescription = styled.p`
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: white !important;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;
