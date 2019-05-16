import * as React from 'react';
import { BarChart } from '../BarChart';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('BarChart', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <BarChart />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
