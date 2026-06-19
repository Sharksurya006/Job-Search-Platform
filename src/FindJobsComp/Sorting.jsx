import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import { HiOutlineAdjustments } from "react-icons/hi";
const groceries = ['Relevance', 'Most Recent', 'Salary(low to high)', 'Salary(high to low)'];

const Sorting=() => {
  const [selectedItem, setSelectedItem] = useState("Relevance")
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div onClick={()=>combobox.toggleDropdown()} className="border-1 flex gap-2 items-center justify-around border-green-500 px-2 py-1">
            {selectedItem}
            <HiOutlineAdjustments />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default Sorting;