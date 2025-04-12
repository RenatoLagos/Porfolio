import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { Image } from "@static/images";
import { Button } from "@components/Button";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

type AboutProps = {
    hideExp?: boolean;
};

// Hide exp is for hiding the commercial experience - on the about page cuz there is a separate section for that
export const About: FC<AboutProps> = ({ hideExp }) => {
    return (
        <S.AboutStyled>
            <Container>
                <FadeIn>
                    <S.AboutTitle>About me</S.AboutTitle>
                </FadeIn>
                <S.AboutContent>
                    <S.AboutContentText>
                        <FadeIn>
                            <p>
                            I’m a Software Engineer with a passion for building modern, scalable web applications and automating processes across the stack. With hands-on experience in frontend frameworks, backend logic, RPA, and cloud systems, I design solutions that are both efficient and impactful.
                            </p>

                            <h3>What I can do?</h3>
                            <p>
                            I thrive on building from scratch, learning new technologies, and turning technical challenges into simple, elegant solutions. Collaboration, curiosity, and quality drive my work every day.
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <S.AboutContentBoxesWrapper>
                                <TextBox>
                                    <h4>Full-Stack Development</h4>
                                    <p>
                                    Crafting fast, responsive apps using React, Next.js, TypeScript, and TailwindCSS with clean, maintainable code.
                                    </p>
                                </TextBox>
                                <TextBox>
                                    <h4>Automation & RPA</h4>
                                    <p>
                                    Enhancing business efficiency through Python, SQL, and Blue Prism bots integrated with web platforms.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4>Database & Cloud Engineering</h4>
                                    <p>
                                    Managing PostgreSQL, SQL Server, and leading migrations to AWS to ensure performance and scalability.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4> System Design & Optimization</h4>
                                    <p>
                                    Solving complex problems with thoughtful architecture and identifying performance bottlenecks across frontend and backend layers.
                                    </p>
                                </TextBox>
                            </S.AboutContentBoxesWrapper>
                        </FadeIn>
                        {!hideExp && (
                            <FadeIn>
                                <h3>What is my commercial experience?</h3>
                                <S.AboutContentBoxesWrapper>
                                    <TextBox
                                        variant="background-text"
                                        bgText="senior"
                                    >
                                        <h4>Python</h4>
                                        <p>3 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="mid"
                                    >
                                        <h4>React</h4>
                                        <p>2 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="mid"
                                    >
                                        <h4>TypeScript</h4>
                                        <p>2 year</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="junior"
                                    >
                                        <h4>Next.js</h4>
                                        <p>1 year</p>
                                    </TextBox>
                                </S.AboutContentBoxesWrapper>
                                <Button link="/about">view more</Button>
                            </FadeIn>
                        )}
                    </S.AboutContentText>
                    <S.AboutContentImage>
                        <FadeIn delay={0.3}>
                            <Image
                                srcLocal="svenImg"
                                alt="sven doe"
                                width={500}
                                height={500}
                            />
                        </FadeIn>
                    </S.AboutContentImage>
                </S.AboutContent>
            </Container>
        </S.AboutStyled>
    );
};
