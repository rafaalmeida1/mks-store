/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Header } from '.'
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

jest.mock("next/router", () => {
  return {
    useRouter(){
      return {
        pathname: '/'
      }
    }
  }
})


describe('Header Component', () => {

  it('header renders correctly', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
  
    expect(screen.getByText('MKS')).toBeInTheDocument()
    expect(screen.getByText('Sistemas')).toBeInTheDocument()
  })
})
