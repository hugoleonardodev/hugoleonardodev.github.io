import React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from './Chip';

test('should render', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).toBeInTheDocument();
});

test('should have property src="https://github.com/hugoleonardodev.png"', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).toHaveProperty('src', 'https://github.com/hugoleonardodev.png');
});

test('should have property alt="https://github.com/hugoleonardodev.png"', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).toHaveProperty('alt', 'https://github.com/hugoleonardodev.png');
});

test('should have attribute shape="rounded"', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).toHaveAttribute('shape', 'rounded');
});

test('should NOT have attribute hasShadow', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).not.toHaveAttribute('hasShadow');
});

test('should NOT have attribute size', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).not.toHaveAttribute('size');
});

test('should have styles={{ height: 72px, width: 72px, border-radius: 100px }}', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).toHaveStyle({height: '72px', width: '72px', 'border-radius': '100px'});
});

test('should NOT have styles="box-shadow: 0 3px 30px rgb(0 0 0 / 50%), 0 3px 20px rgb(0 0 0 / 10%)"', () => {
    render(<Chip avatar='https://github.com/hugoleonardodev.png'/>);
    const avatar = screen.getByAltText('https://github.com/hugoleonardodev.png');
    expect(avatar).not.toHaveStyle('box-shadow: 0 3px 30px rgb(0 0 0 / 50%), 0 3px 20px rgb(0 0 0 / 10%)');
});
