
import { Draggable } from '../icons';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export default function DataTableAction() {

  return (
    <div className="ath-data-table-action">
      <Menu>
        <MenuButton><span><Draggable /></span></MenuButton>
        <MenuItems anchor="bottom">
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/settings">
              Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/support">
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/license">
              License
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}