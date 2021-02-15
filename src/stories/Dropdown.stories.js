import React from 'react';
import Dropdown from '../components/dropdown';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title:'Fane-ui/Dropdown',
    component:Dropdown
}

const Template = args => <Dropdown {...args} />

export const Default = Template.bind({});
Default.args = {
    name:"Cars",
    options:[
        {innerText:"Volvo",value:"volvo"},
        {innerText:"Saab",value:"saab"},
        {innerText:"Mercedes",value:"mercedes"},
        {innerText:"Audi",value:"audi"}
    ]
}
