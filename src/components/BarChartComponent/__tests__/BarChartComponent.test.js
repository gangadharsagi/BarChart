import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { BarChartComponent } from '../BarChartComponent';

describe('BarChartComponent', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <BarChartComponent />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
