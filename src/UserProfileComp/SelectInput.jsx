import { Combobox, InputBase, ScrollArea } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useCombobox } from '@mantine/core';

const SelectInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setData(props.options || []);
    setValue(props.value || '');
    setSearch(props.value || '');
  }, [props.options, props.value]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const safeSearch = typeof search === 'string' ? search : '';

  const exactOptionMatch = data?.some((item) => typeof item === 'string' && item === safeSearch);

  const filteredOptions = exactOptionMatch
    ? data
    : data?.filter(
        (item) =>
          typeof item === 'string' &&
          typeof safeSearch === 'string' &&
          item.toLowerCase().includes(safeSearch.toLowerCase().trim())
      ) || [];

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        const safeVal = typeof safeSearch === 'string' ? safeSearch : '';
        if (val === '$create') {
          setData((current) => [...current, safeVal]);
          setValue(safeVal);
        } else {
          setValue(val);
          setSearch(val);
        }
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          withAsterisk
          className="font-semibold"
          label={props.label}
          leftSection={<props.leftsection stroke={1.5} />}
          rightSection={<Combobox.Chevron />}
          value={safeSearch}
          onChange={(event) => {
            const newVal = event.currentTarget.value || '';
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(newVal);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder={props.placeholder}
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={200} type="scroll">
            {options}
            {!exactOptionMatch && safeSearch.trim().length > 0 && (
              <Combobox.Option value="$create">+ Create {safeSearch}</Combobox.Option>
            )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
