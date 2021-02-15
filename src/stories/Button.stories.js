import React, {useState}from 'react';

import Button from './../components/button/';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title:'Fane-ui/Button',
    component:Button
}


const Template = args => {
    const [value, setValue] = useState(args.value ?? '');
    return (
      <>
        <Button
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

//const Template = args => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label:'Login',
    type:"button",
    value:"login"
}