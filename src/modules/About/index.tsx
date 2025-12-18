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
                            I'm a Full Stack Engineer based in Berlin, Germany with expertise in TypeScript/React and Python/Django. I specialize in building modern, scalable web applications, real-time monitoring dashboards, and automation systems that deliver measurable business impact.
                            </p>

                            <h3>What I can do?</h3>
                            <p>
                            I thrive on building complete solutions from frontend to backend, implementing microservices architectures, and creating data-driven dashboards. I bring strong expertise in cloud infrastructure (AWS, Docker), API design (REST, JWT, OAuth), and workflow orchestration (Apache Airflow).
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <S.AboutContentBoxesWrapper>
                                <TextBox>
                                    <h4>Full-Stack Development</h4>
                                    <p>
                                    Building production-ready applications with React, Next.js, TypeScript, and TailwindCSS on the frontend, paired with Django REST Framework, FastAPI, and Node.js/Express backends.
                                    </p>
                                </TextBox>
                                <TextBox>
                                    <h4>Microservices & APIs</h4>
                                    <p>
                                    Designing and implementing scalable microservices architectures with JWT authentication, rate limiting, and REST API design serving millions of requests.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4>Cloud & DevOps</h4>
                                    <p>
                                    Deploying containerized applications with Docker, AWS (API Gateway, EC2, ALB), and implementing CI/CD pipelines with GitHub Actions.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4>Data & Orchestration</h4>
                                    <p>
                                    Building workflow automation systems with Apache Airflow, managing PostgreSQL/MySQL databases, and creating ETL pipelines with pandas and NumPy.
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
                                        <p>4 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="senior"
                                    >
                                        <h4>TypeScript</h4>
                                        <p>3 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="senior"
                                    >
                                        <h4>React</h4>
                                        <p>3 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="senior"
                                    >
                                        <h4>Django</h4>
                                        <p>3 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="mid"
                                    >
                                        <h4>Next.js</h4>
                                        <p>2 years</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="mid"
                                    >
                                        <h4>FastAPI</h4>
                                        <p>2 years</p>
                                    </TextBox>
                                </S.AboutContentBoxesWrapper>
                                <Button link="/about">view more</Button>
                            </FadeIn>
                        )}
                    </S.AboutContentText>
                    <S.AboutContentImage>
                        <FadeIn delay={0.3}>
                            <Image
                                srcLocal="profilePhoto2"
                                alt="About me"
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
