import { useEffect, useState } from "react";

type IconProps = {
    variant: string;
};

export const Icon: React.FC<IconProps> = ({ variant }) => {
    const [iconSrc, setIconSrc] = useState('');

    useEffect(() => {
        const mount = async () => {
            // Correção aqui: usando template string corretamente
            const imagePath = `../../assets/icons/${variant}.png`;
            const module = await import(imagePath);

            // Criando um blob URL para a imagem importada
            const objectUrl = URL.createObjectURL(module);
            setIconSrc(objectUrl);
        };

        mount();
    }, [variant]);

    return <img src={iconSrc} width="30px" height="30px" alt={variant} />;
};
