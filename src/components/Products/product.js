import {React, useState} from "react";
import Card from '@mui/material/Card';
import ToggleButton from '@mui/material/ToggleButton';
import { CardMedia, Typography, CardContent, Button, Box, Select, MenuItem, ToggleButtonGroup } from "@mui/material";
import './product_style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from "../../common/NavigationBar/navbar";

const Product = () => {
    const category = ['All', 'Apparel', 'Electronics', 'Personal Care']

    const [selectedSortingOption, setSelectedSortingOption] = useState("default");

    const productlist = [
        { id :1, name: "shoes1", price: "1000", image: "", description: "It is the beautiful shoes just for the testing purpose of the assignment checking the length the of the product cards" },
        { id :2, name: "shirt1", price: "1001", image: "", description: "It is the beautiful Shirt size is not the same in all of the cards" },
        { id :3, name: "Headphones", price: "1000", image: "", description: "It is the beautiful HeadPhones" },
        { id :4, name: "Mobile", price: "1000", image: "", description: "It is the beautiful Mobile" }
    ];

    const sortingOptions = [
        { value: "default", label: "Default" },
        { value: "priceAsc", label: "Price: High to Low" },
        { value: "priceDesc", label: "Price: Low to High" },
        { value: "newest", label: "Newest" },
        // Add more sorting options as needed
    ];

    return (
        <>
        
        <div>
            
            <ToggleButtonGroup sx={{display : 'flex', justifyContent :'center', marginTop: 2}} exclusive >
            
                {category.map((cat, index) => (
                    <ToggleButton key={cat} value={cat}>
                        {cat}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>

            
            <Box  flexDirection='row' marginX={3}>
                <Typography variant="h6"> Sort By: </Typography>
               <Select  sx={{minWidth:'15%'}} 
               value={selectedSortingOption}
               onChange={evt=>setSelectedSortingOption(evt.target.value)}
               >
            
                {sortingOptions.map((sort,index)=>(
                 <MenuItem key={sort.value} value ={sort.value}>{sort.label}</MenuItem>
                ))}
                </Select>
            </Box>
            
            <div className="product_card_style">
                {productlist.map((product) => (
                    <Card key={product.id} style={{ minWidth: 345, maxWidth:345, margin: '16px' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <Box display="flex" justifyContent="space-between">
                            <Typography  variant="h6" gutterBottom>
                                {product.name}   
                            </Typography>
                            <Typography   variant="h6" gutterBottom>
                            {"$" + product.price}
                            </Typography>
                            
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Box display="flex" justifyContent="space-between" marginTop={3}>
                                <Button variant="contained" color="primary">
                                    BUY
                                </Button>
                                <Box>
                                    <Button >
                                        <EditIcon />
                                    </Button>
                                    <Button>
                                        <DeleteIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        </>
    )
}

export default Product;
