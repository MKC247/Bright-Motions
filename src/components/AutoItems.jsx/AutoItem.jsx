import React, { useContext } from "react";
import Addform from "../Addform";
import CartContext from "../../store/cart-context";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const AutoItems = (props) => {
    const CartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
        CartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    };
    return (

        <>
            <Card
                sx={{
                    height: '100%', display: 'flex', flexDirection: 'column',
                    alignItems: 'center',
                    "&:hover": {
                        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                        transform: 'translate3d(0, -1px, 0) scale(1.02)',
                        border: '1px solid #0039a6',

                    },
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        // 16:9
                        pt: '10%',
                    }}
                    image="https://4wdprofishop.cz/resources/products/1/123872_2.jpg?size=large"
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 'bold', opacity: '.9' }}>
                        {props.name}
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                        {props.description}
                    </Typography>
                    <Typography sx={{ pt: '5px', opacity: '.7', textAlign: 'center' }}>
                        Ksh {props.price}
                    </Typography>
                </CardContent>
                <CardActions>
                <Addform onAddToCart={addToCartHandler} />
                </CardActions>
            </Card>

        </>
    )
}
export default AutoItems;