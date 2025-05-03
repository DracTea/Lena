import TextField from './text-field';
import PasswordField from './password-field';
import EmailField from './email-field';
import SelectField from './select-field';
import NumberField from './number-field';
import ToggleField from './toggle-field';
import CopyField from './copy-field';
import ColorField from './color-field';
import MediaField from './media-field';
import TiptapField from './tiptap-field';
import RepeaterField from './repeater-field';

export {
  TextField,PasswordField,EmailField,SelectField,
  NumberField,ToggleField,CopyField,ColorField,
  MediaField,TiptapField,RepeaterField
}

export default {
  'text': TextField,
  'password': PasswordField,
  'email': EmailField,
  'select': SelectField,
  'number': NumberField,
  'toggle': ToggleField,
  'copy': CopyField,
  'color': ColorField,
  'media': MediaField,
  'tiptap': TiptapField,
  'repeater': RepeaterField
}