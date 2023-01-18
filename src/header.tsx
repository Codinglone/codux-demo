import type React from 'react';
import { st, classes } from './header.st.css';

export interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={st(classes.root, className)}>
            <h1 className={classes.title}>Hi{' '}
                <a
                    className={classes.anchor}
                    href="https://stylable.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >There</a>{' '}</h1>
        </header>
    );
};
