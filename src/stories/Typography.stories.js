import { storiesOf } from '@storybook/react';
import React from "react"
import Typography from '../components/Typography';

storiesOf('Components', module).add('Typography', () => (
    <>
    <Typography variant="title">title</Typography> 
    <Typography>classic</Typography> 
    </>
    ));

