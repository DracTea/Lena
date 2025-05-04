import './button-group.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
}

function ButtonGroup({children, className}: Props) {
  return (
    <section className={`ath-button-group ${className}`}>
      {children}
    </section>
  );
}


export default ButtonGroup;