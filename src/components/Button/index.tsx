import React from "react";
import { IButton } from "../../models/button.model";
import * as S from "./styles";

export const Button: React.FC<IButton> = ({
    onClick,
    variant = "default",
    size = 'medium',
    disabled,
    children,
    ...rest
}) => (
        <S.Container 
            onClick={onClick}
            variant={variant}
            size={size}
            disabled={disabled}
            {...rest}
        >
            {children}
        </S.Container>
    )