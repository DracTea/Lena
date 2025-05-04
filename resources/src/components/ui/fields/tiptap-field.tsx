import { useId } from 'react';
import './tiptap-field.scss';



type Props = {
    label: string;
    name: string;
    value: string;
    onChange: (value: string, name: string) => void;
    className?: string;
}


function TiptapField({ label, name, value, onChange, className = '' }: Props) {
    const id = useId();

    function ch(e: React.ChangeEvent<HTMLInputElement>) {

    }

    return (
        <div className={`ath-tiptap-field ath-field ${className}`}>
            {label && (
                <div className="ath-field__label-wrapper">
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div className="ath-field__wrapper">
                <input id={id} type="text" {...{ name, value }} onChange={ch} />
            </div>
        </div>
    )
}

export default TiptapField;


