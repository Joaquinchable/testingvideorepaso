import React from 'react';
import {shallow} from 'enzyme';
import Ticket from './Ticket';


it('Debe devolver incrementar cuando se haga click el boton' , () =>{

const wrapper = shallow(<Ticket />);
const total1 = wrapper.find("h2.total").text()

expect(total1).toBe('0')

const button = wrapper.find("button");

button.simulate("click");
button.simulate("click");
button.simulate("click");
button.simulate("click");


const total2 = wrapper.find("h2.total").text();


expect(total2).toBe('4')

})


it('Debe devolver el props' , () =>{

    const wrapper = shallow(<Ticket title={'NHL tickets'} />);
    const title = wrapper.find("h2.title").text()
    
    expect(title).toBe('NHL tickets')
    

    
    })




