import { type FC } from "react";
import type { ImageMetadata } from "astro";
import ProfilePhoto from "./profile-photo.webp";
import ProfilePhoto2 from "./profile-photo-2.webp";
import PaineTowers from "./paine-towers.webp";
import ProactiveMonitoring from "./proactive-monitoring.webp";
import CodeBridge from "./code-bridge-2.webp";
import LinguaConnect from "./lingua-connect.webp";

export const images: Record<string, string | ImageMetadata> = {
    profilePhoto: ProfilePhoto,
    profilePhoto2: ProfilePhoto2,
    paineTowers: PaineTowers,
    proactiveMonitoring: ProactiveMonitoring,
    codeBridge: CodeBridge,
    linguaConnect: LinguaConnect,
};

type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading = "lazy",
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const imageSrc = srcLocal 
        ? typeof images[srcLocal] === 'string' 
            ? images[srcLocal] 
            : (images[srcLocal] as ImageMetadata)?.src ?? ''
        : src;

    return (
        <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export { PaineTowers, ProactiveMonitoring, CodeBridge, ProfilePhoto, ProfilePhoto2, LinguaConnect };
