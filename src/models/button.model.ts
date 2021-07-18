export interface IButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'default' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    children: React.ReactNode;
}