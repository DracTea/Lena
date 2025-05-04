

export default class Field {
  private options: any;

  constructor(options: any) {
    this.options = options;
  }

  public json() {
    return this.options;
  }

  public grid(val: number = 1) {
    this.options.className = `ath-field__grid-${val}`;
    return this;
  }

  public placeholder(val: string) { 
    this.options.placeholder = val;
    return this;
  }

  public type(val: string) {
    this.options.type = val;
    return this;
  }

  public static text(label: string, name = null) {
    const options = {
      type: 'text',
      label: label,
      name: name ? name : label.toLowerCase().replace(/\s+/g, '-'),
      def: '',
      placeholder: '',
      className: 'ath-field__grid-4',
    };

    return new Field(options);
  }
}