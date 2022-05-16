import React from 'react'
import CoffeeCard from './CoffeeCard';
import { Grid } from "@material-ui/core"

const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4} >
                <CoffeeCard title="Hamilton beach flexbrew"
                    subtitle="49.99"
                    avatarSrc="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-url-marketing-agency-flaticons-lineal-color-flat-icons.png"
                    imgSrc="https://pixabay.com/get/g26ccf1421bab065b4578387319f77643b258e1e69cc37adf277dd18c7da4f48a0f7630d05fd6dfe557e7d898d4fc74cc321a0dc64440874a091d2f5f78f7fe17eaf59ab40c77f3e4199f40bae5ed8c0d_1920.jpg"
                    description=" some imaginary coffee machine"
                />
            </Grid>

        </Grid>


    );
}

export default Content;