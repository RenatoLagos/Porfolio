import { type FC } from "react";
import * as S from "./styled";
import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";
import { PaineTowers } from "@static/images";

import Resume from "@static/Resume_Renato_Lagos.pdf";
import { FadeIn } from "@utils/animations/FadeIn";

export const Hero: FC = () => {
    return (
        <S.HeroWrapper>
            <S.BackgroundImage src={PaineTowers.src} alt="Background" />
            <Container>
                <S.HeroContent>
                    <FadeIn>
                        <S.HeroImageStyled
                            srcLocal="profilePhoto"
                            alt="hero"
                            width={300}
                            height={300}
                        />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <S.PreHeading data-aos="fade-up">
                            Hi, I'm <strong>Renato Lagos</strong>
                        </S.PreHeading>
                        <S.HeroTitle>Full Stack Engineer (TypeScript/React, Python/Django)</S.HeroTitle>
                        <p>
                            I'm a <b>Full Stack Engineer</b> based in Berlin, Germany with <b>over 4 years</b> of experience building web applications, automation systems, and RPA solutions.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Socials />
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <Button link={Resume} target="_blank" align="center">
                            Open Cv
                        </Button>
                    </FadeIn>
                </S.HeroContent>
            </Container>
        </S.HeroWrapper>
    );
};
