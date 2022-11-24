import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <FormControl variant="standard" sx={{ marginRight: 3, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-standard-label">
          {defaultValue}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          label="Age"
        >
          {options.map((option) => (
            <MenuItem
              value={{ value: option.value, descending: option.descending }}
              key={option.name}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
