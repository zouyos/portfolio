import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

export default function DropDownButton({ onClick }) {
  return (
    <Menu>
      <MenuButton className='inline-flex items-center gap-2 rounded-md bg-gray-500 py-2 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white'>
        GitHub
        <ChevronDownIcon className='size-4 fill-white/60' />
      </MenuButton>

      <MenuItems
        transition
        anchor='bottom start'
        className='w-52 origin-top-right rounded-xl border border-white/5 bg-gray-500 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
      >
        <MenuItem>
          <button
            className='group flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-gray-600 github_front'
            onClick={onClick}
          >
            Front
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className='group flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-gray-600 github_back'
            onClick={onClick}
          >
            Back
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
