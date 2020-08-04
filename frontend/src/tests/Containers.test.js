import React from "react";
import { shallow, configure} from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Patient from "../containers/Patient";
import Adapter from 'enzyme-adapter-react-16';


const mockStore = configureMockStore();
const store = mockStore({});

configure({adapter: new Adapter()});

describe("Testing Login Page Renders", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Login />
                </Provider>
            ).exists(<h2>Log-in to your account</h2>)
        )
    });
});

describe("Testing Sign Up Page Renders", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Signup />
                </Provider>
            ).exists(<h2>Signup to your account</h2>)
        )
    });
});

describe("Testing Sign Up Page Renders", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Patient />
                </Provider>
            ).exists(<h2>Signup to your account</h2>)
        )
    });
});