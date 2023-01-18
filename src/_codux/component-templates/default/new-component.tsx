import { st, classes } from './new-component.st.css';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent = ({ className }: NewComponentProps) => {
    return <div className={st(classes.root, className)}>NewComponent</div>;
};
