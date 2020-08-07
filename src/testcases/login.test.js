import React from "react";
import Login from "../components/login";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { shallow } from "enzyme";
import "../setupTests";

describe("Login component", () => {
    // testing redering of login component
    it('should render without throwing an error', () => {
          expect(shallow(<Login />).exists()).toBe(true)
      })
      //testing the email and password input existence
      it('email input', () => {
          expect(shallow( <Login /> ).find('#outlined-email').length).toEqual(1)
        })
        it('password input', () => {
          expect(shallow( <Login /> ).find('#outlined-password').length).toEqual(1)
        })
  }); 
  describe('email input', () => {
    //testing email input
      it('should respond to change email', () => {
        const wrapper = shallow( <Login /> );
        wrapper.find('#outlined-email').simulate('change', {
          target: {
            name: 'email',
            value: 'suraj@gmail.com'
          }
        });
        expect(wrapper.state('email')).toEqual('suraj@gmail.com');
      })
    })
    describe('password input', () => {
      //testing password input for Fundoo notes
      it('should respond to change password', () => {
        const wrapper = shallow( <Login /> );
        wrapper.find('#outlined-password')
          .simulate('change', {
            target: {
              name: 'password',
              value: 'Suraj@1234'
            }
          });
        expect(wrapper.state('password')).toEqual('Suraj@1234');
      })
    })
    //negative test cases for login
  describe('Login Component', () => {
    //testing rendering of login component
      it('render without throwing an error', () => {
          expect(shallow(< Login />).exists()).toBe(true)
      })
      //testing the email and password input existence
      it('renders a email input', () => {
          expect(shallow( < Login /> ).find('#outlined-email').length).toEqual(1)
        })
        it('renders a password input', () => {
          expect(shallow( < Login /> ).find('#outlined-password').length).toEqual(1)
        })
  })
    describe('Email input', () => {
    //testing email input 
      it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow( < Login /> );
        wrapper.find('#outlined-email').simulate('change', {
          target: {
            name: 'email',
            value: 'Suraj.Hudge@gmail.com'
          }
        });
        expect(wrapper.state('email')).toEqual('Suraj.Hudge@gmail.com');
      })
    })
    describe('Password input', () => {
      //testing password input 
      it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow( < Login /> );
        wrapper.find('#outlined-password')
          .simulate('change', {
            target: {
              name: 'password',
              value: 'dsiugwsjsi'
            }
          });
        expect(wrapper.state('password')).not.toEqual('lwasihgbi');
      })
    })
  
    describe('Login Component', () => {
    //testing rendering of login component
      it('should render without throwing an error', () => {
          expect(shallow(< Login />).exists()).toBe(true)
      })
      //testing the email and password input existence
      it('renders a email input', () => {
          expect(shallow( < Login /> ).find('#outlined-email').length).toEqual(1)
        })
        it('renders a password input', () => {
          expect(shallow( < Login /> ).find('#outlined-password').length).toEqual(1)
        })
  })
    describe('Email input', () => {
    //testing email input for Fundoo notes
      it('should respond to change email', () => {
        const wrapper = shallow( < Login /> );
        wrapper.find('#outlined-email').simulate('change', {
          target: {
            name: 'email',
            value: 'Suraj123soi@gmail.com'
          }
        });
        expect(wrapper.state('email')).not.toEqual('Suraj.Hudge@gmail.com');
      })
    })
    describe('Password input', () => {
      //testing password input for Fundoo notes
      it('should respond to change password', () => {
        const wrapper = shallow( < Login /> );
        wrapper.find('#outlined-password')
          .simulate('change', {
            target: {
              name: 'password',
              value: 'asuhbsa'
            }
          });
        expect(wrapper.state('password')).toEqual('asuhbsa');
      })
    })
    it('Dispatches authorization', () => {
        let mock = new MockAdapter(axios);
        mock.onPost(`https://localhost:44387/api/User/Login`, { 
            email: 'suraj@gmail.com', 
            password: 'Suraj@123'
        }).reply(200, {success: 'true' });
    });
    