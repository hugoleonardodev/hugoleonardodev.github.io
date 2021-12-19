import React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from './Chip';

describe('Chip component and its behaviour', () => {
    it('should render', () => {
        render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);

        const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');

        expect(avatar).toBeInTheDocument();
    })
})
