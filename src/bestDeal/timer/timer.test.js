import React from 'react';
import Timer from './timer';
import { shallow } from '../../enzyme';


let component, date;
describe('<Timer/>', () => {
  beforeAll(() => {
      component = shallow(<Timer>2019-04-13T18:25:43.511Z</Timer>); 
      date = Date.parse('2019-04-13T18:25:43.511Z') - Date.parse(new Date());
  });
  it('render Timer Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
  it('state is working correctly', () => {
    expect(component.state('dealEndDueTime')).toBe(date);
  });
  it('time difference is shown correctly', () => {
    expect(component.find('div').at(0).text()).toContain("Days");
  });
});
it('render ComponentDidMount correctly', () => {
  jest.useFakeTimers();
  component = shallow(<Timer>2019-04-13T18:25:43.511Z</Timer>);
  jest.advanceTimersByTime(1000);
  expect(component.state('dealEndDueTime')).toBe(date - 1000);
  jest.useRealTimers();
});
