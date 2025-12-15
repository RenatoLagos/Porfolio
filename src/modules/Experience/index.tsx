import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";
import { ExperienceData } from "./data/ExperienceData";

export const Experience: FC = () => {
    return (
        <S.ExperienceStyled>
            <Container>
                <FadeIn>
                    <S.ExperienceTitle>Work Experience</S.ExperienceTitle>
                </FadeIn>
                <S.ExperienceTimeline>
                    {ExperienceData.map((exp, index) => (
                        <FadeIn key={index} delay={0.1 * (index + 1)}>
                            <S.TimelineItem>
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <div className="meta">
                                    <span>{exp.period}</span>
                                    <span>•</span>
                                    <span>{exp.location}</span>
                                </div>
                                <p>{exp.description}</p>
                            </S.TimelineItem>
                        </FadeIn>
                    ))}
                </S.ExperienceTimeline>
            </Container>
        </S.ExperienceStyled>
    );
};
