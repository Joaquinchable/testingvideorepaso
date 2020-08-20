import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Footer from './components/Footer';
import Ticket from './components/Ticket';



it("Debe hacer el render de Footer y Ticket", () => {

const wrapper = shallow(<App />);
const footer =  wrapper.find(Footer)
const ticket =  wrapper.find(Ticket)



expect(footer.exists()).toBe(true);
expect(ticket.exists()).toBe(true);

})