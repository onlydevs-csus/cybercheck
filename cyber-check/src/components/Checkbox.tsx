import React, { useState, useEffect } from "react";
import { CheckBox, Icon } from "@rneui/themed";

interface Props {
  getCheckboxStatus: (checked: boolean) => boolean;
}

const Checkbox = ({ getCheckboxStatus }: Props) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getCheckboxStatus(checked);
  });

  return (
    <>
      <CheckBox
        iconType="material"
        uncheckedIcon="check-box-outline-blank"
        checkedIcon="check-box"
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
    </>
  );
};

export default Checkbox;
