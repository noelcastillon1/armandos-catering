import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import ConsultForm from '../../components/ConsultForm';

describe('Consult interest form tests', () => {
    const renderComponent = () => {
        return render(<ConsultForm />)
    };
    const handleOnSubmitMock = jest.fn();

    it('Should add an error in a p element if a field is not valid', async () => {
        renderComponent();
        await act(() => {
            fireEvent.focus(screen.getByTestId('name-input'))
            fireEvent.blur(screen.getByTestId('name-input'))
        })
        expect(screen.getByTestId("input-error")).toBeInTheDocument()
    })

    it('Should disable the submit button when the form is not valid', async () => {
        renderComponent();
        await act(() => {
            fireEvent.focus(screen.getByTestId('name-input'))
            fireEvent.blur(screen.getByTestId('name-input'))
        })
        expect(screen.getByTestId("submit-button")).toBeDisabled()
    })

    it('Should submit the form if all fields are valid', async () => {
        renderComponent();
        screen.getByTestId("catering-interest-form").onsubmit = handleOnSubmitMock;
        fireEvent.click(screen.getByTestId("submit-button"));
        expect(handleOnSubmitMock).toHaveBeenCalled();
    })
})