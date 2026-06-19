import React, { useState, useEffect } from 'react';
import {
  Combobox,
  useCombobox,
  Pill,
  PillsInput,
  Group,
  Checkbox,
} from '@mantine/core';

const MAX_VISIBLE = 1;

const MultiInput = (props) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    setData(props.options || []);
  }, [props.options]);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val) => {
    setSearch('');
    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
      );
    }
  };

  const handleValueRemove = (val) => {
    setValue((current) => current.filter((v) => v !== val));
  };

  const values = value.slice(0, MAX_VISIBLE).map((item) => (
    <Pill  style={{ backgroundColor: '#22c55e', color: 'black' }}  key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  // Show "+X more" if items exceed the max visible limit
  if (value.length > MAX_VISIBLE) {
    values.push(
      <Pill className="bg-green-500" key="more" color="green">
        +{value.length - MAX_VISIBLE} more
      </Pill>
    );
  }

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            size="xs"
            color="green"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
      className="border-green-500 border-1 focus:outline-none font-semibold font-['poppins']"
    >
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()} leftSection={<div className="w-[30px] h-[30px] mx-2 flex items-center">
           <props.icon/>
		</div>}>
          <Pill.Group>
            {values}
            <Combobox.EventsTarget>
              <div className="flex items-center gap-1">
                <PillsInput.Field
                  value={search}
                  placeholder={props.title}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                  onChange={(event) => {
                    combobox.updateSelectedOptionIndex();
                    setSearch(event.currentTarget.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace' && search.length === 0) {
                      event.preventDefault();
                      handleValueRemove(value[value.length - 1]);
                    }
                  }}
                />
              </div>
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}
          {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;
