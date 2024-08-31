import { render, screen } from '@testing-library/react';
import DeviceList from './DeviceList';

test('renders device list', () => {
  render(<DeviceList devices={[{ id: '1', name: 'Device 1', status: 'active' }]} />);
  const deviceElement = screen.getByText(/Device 1/i);
  expect(deviceElement).toBeInTheDocument();
});
