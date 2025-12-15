import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <FadeIn>
                    <S.ContactTitle>Contact me</S.ContactTitle>
                </FadeIn>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+4915212917347"
                            target="_blank"
                        >
                            <h3>+49 1521 2917347</h3>
                            <p>
                                Call me if you have any questions or want to
                                work with me
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:renato.lagos@example.com"
                            target="_blank"
                        >
                            <h3>renato.lagos@example.com</h3>
                            <p>
                                also you can write me an email if you have any
                                questions
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        <p>Berlin, Germany</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
