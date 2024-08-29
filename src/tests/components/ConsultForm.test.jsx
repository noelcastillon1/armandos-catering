import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import ConsultForm from '../../components/ConsultForm';

describe('Consult interest form tests', () => {
    
    it('Should add an error in a p element if a field is not valid', async () => {
        render(<ConsultForm />)
        await act(() => {
            fireEvent.focus(screen.getByTestId('name-input'))
            fireEvent.blur(screen.getByTestId('name-input'))
        })
        expect(screen.getByTestId("input-error")).toBeInTheDocument()
    })
    // it('Should disable the submit button when the form is not valid')
    // it('Should write the form to the database on submission')
})