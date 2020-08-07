import React from "react";
import Register from "../components/registration";
import { shallow } from "enzyme";
import "../setupTests";

describe('Registration Component', () => {
  //testing rendering of registration component
    it('should render without throwing an error', () => {
        expect(shallow( < Register /> )
                .exists())
            .toBe(true)
    })
//testing existence of firstname and lastname
    it('renders a firstName input', () => {
        expect(shallow( < Register /> ).find('#firstName').length).toEqual(1)
    })
    it('renders a lastName input', () => {
        expect(shallow( < Register /> ).find('#lastName').length).toEqual(1)
    })
    it('renders a Email input', () => {
        expect(shallow( < Register /> ).find('#email').length).toEqual(1)
    })
    it('renders a Password input', () => {
        expect(shallow( < Register /> ).find('#password').length).toEqual(1)
    })
    it('renders a Address input', () => {
        expect(shallow( < Register /> ).find('#address').length).toEqual(1)
    })
    it('renders a City input', () => {
        expect(shallow( < Register /> ).find('#city').length).toEqual(1)
    })
    it('renders a Phone Number input', () => {
        expect(shallow( < Register /> ).find('#phoneNumber').length).toEqual(1)
    })
    describe('firstName input', () => {
        //testing given input
        it('should respond to change event and change the state of the Registration Component', () => {
             const wrapper = shallow( < Register /> );
            wrapper.find('#firstName').simulate('change', {
                target: {
                    name: 'firstname',
                    value: 'Suraj'
                }
            });
            expect(wrapper.state('firstName')).toEqual('Suraj');
        })
    })
})