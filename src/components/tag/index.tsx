import './style.css';

interface ITagProps {
    name: string;
}

export const Tag = (props: ITagProps) => {
    return (
        <span className='spanStyle'>{props.name}</span>
    );
}
