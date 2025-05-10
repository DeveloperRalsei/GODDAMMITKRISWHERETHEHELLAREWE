export const Box = ({
    spritePath,
    text,
    size = "lg",
}: {
    text: string;
    size?: "sm" | "md" | "lg";
    spritePath?: string;
}) => {
    return (
        <div className={`box-${size}`}>
            {spritePath && <img src={spritePath} alt="sprite" width={40} />}
            <div>{text}</div>
        </div>
    );
};
