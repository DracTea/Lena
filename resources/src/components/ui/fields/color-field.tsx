

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  placeholder?: string;
  className?: string;
};

export default function ColorField({ label, name, value, placeholder, onChange, className = '' }: Props) {

  return (
    <div className="flex items-center gap-2">
      <input type="color" className="w-8 h-8 border-0 rounded cursor-pointer" />
      <input type="text" className="w-full h-8 px-2 border rounded" placeholder="#000000" />
    </div>
  )
}