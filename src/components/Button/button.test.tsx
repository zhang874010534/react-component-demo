import React from 'react'
import {fireEvent, render} from "@testing-library/react";
import Button, {ButtonProps, ButtonSize, ButtonType} from './button'

const defaultProps = {
  onClick: jest.fn()
}
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "zhangCe"
}

test('our first react test case', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const wrapper = render(<Button>Nice</Button>)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
})

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe("test Button component", () => {
  it("should render the correct default button",() => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeTruthy()
    expect(element).toBeInTheDocument()
    // eslint-disable-next-line jest/valid-expect
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("btn btn-default")
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it("should render the correct component based on different props" , () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("btn-primary btn-lg zhangCe")
  })
  it("should render a link when btnType equals link", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const wrapper = render(<Button btnType={ButtonType.Link} href={"https://github.com"}>Link</Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("A")
    expect(element).toHaveClass("btn btn-link ")
  })

  it("should render disabled button when disabled set to true", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
