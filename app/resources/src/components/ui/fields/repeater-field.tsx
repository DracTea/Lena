import './repeater-field.scss';

type Props = {
  name: string;
  value: any[];
  onChange: (value: any, name: string) => void;
  options: any[];
  label?: string;
  className?: string;
};

export default function RepeaterField({ options, value, onChange, className = '' }: Props) {

  return (
    <div className={`repeater-field ${className}`}>
     {options.map((option, index) => (<Row key={index} {...option} />))}
    </div>
  );
}

function Row() {
  return (
    <div className="repeater-field__row">
      <div className="repeater-field__row__item"></div>
      <div className="repeater-field__row__item"></div>
      <div className="repeater-field__row__item"></div>
    </div>
  );
}
  