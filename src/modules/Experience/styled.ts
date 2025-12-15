import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const ExperienceStyled = styled.section`
    background: ${Theme.bgElement};
    padding: 100px 0;

    @media (max-width: 768px) {
        padding: 50px 0;
    }
`;

export const ExperienceTitle = styled.h2`
    text-align: center;
    margin-bottom: 60px;
`;

export const ExperienceTimeline = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
`;

export const TimelineItem = styled.div`
    position: relative;
    padding-left: 30px;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: ${Theme.primary};
        border-radius: 2px;
    }

    h3 {
        margin-bottom: 5px;
        color: ${Theme.primary};
    }

    h4 {
        margin-bottom: 10px;
        font-weight: 600;
    }

    .meta {
        display: flex;
        gap: 20px;
        margin-bottom: 15px;
        font-size: 0.9em;
        color: ${Theme.textSecondary};
    }

    p {
        line-height: 1.6;
    }
`;
