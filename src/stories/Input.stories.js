/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import Input from '../components/Inputs';

export default {
  title: 'Fame-ui/Input',
  component: Input,
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true,
      },
    },
  },
};

const Template = args => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <>
      <Input
        {...args}
        onChange={(...params) => {
          args.onChange(...params);
          setValue(...params);
        }}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>{JSON.stringify({ value }, null, 2)}</pre>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: "text",
  value: 'Hello'
}

export const Number = Template.bind({});
Number.args = {
  type: "number",
  value: '1234'
}

export const Password = Template.bind({});
Password.args = {
  type: "password",
  value: '1234'
};
