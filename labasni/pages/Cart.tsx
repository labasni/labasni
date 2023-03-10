import { Autocomplete } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Cart() {
  const [uu, setUu] = useState();
  const [prod, setProd]= useState({})
  const [data, setData] = useState<any>([]);
  const [total, setTotal] = useState<any>();

  const router = useRouter();
  const e = router.query;

  useEffect(() => {
    const user = localStorage.getItem("id");
    setUu(user)
    axios.get(`http://localhost:5000/api/users/getuser/${user}`)
    .then(res =>{
      setData(res.data.cart)
       console.log(res.data.cart)
       const getTotal = (res.data.cart.reduce((acc, item) => acc + item.price, 0)).toFixed(2)
       setTotal(getTotal)
       console.log(getTotal)
      });
     


      
  }, []);

  return (
    <div>
      <div>
      <h1>the total is : {total} $</h1>
    </div>
    {
      data.map((el:any) => {
        return (
          <div>
            <div className="py-2">
              <Button>
                <Link href="/Products">back to products</Link>
              </Button>
            </div>
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="190"
                image={el.imageUrl}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  name : {el.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price : {el.price}
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
            <div className="card p-5">
              <Button variant="contained" endIcon={<BeenhereIcon />}>
                <Link href="/Product" >buy</Link>
              </Button>
            </div>
            <div className="card p-5">
              <Button variant="contained" endIcon={<BeenhereIcon />}
              onClick={() => {
                setProd(el)
               console.log("===>" + el);
                axios.delete(`http://localhost:5000/api/users/cart/${uu}`,{cart:el});
              
              }}>
                <Link href="/Cart" >Remove</Link>
              </Button>
            </div>
            
          </div>
        )
      }
      )
    }
    
    </div>
    )
}
{/* <div className="md:col-span-2">
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/417c644b-dbb4-4130-842e-ae6d2fffd30f/chaussure-de-football-a-crampons-pour-terrain-sec-gripknit-phantom-gx-elite-fg-C0D3tn.png"
            width={Autocomplete}
            height={500}/>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">Nike Gripknit Phantom GX Elite FG</h1>
            </li>
            <li>Brand: nike</li>
            <li>price: 259.99</li>
            <li>Color: pink</li>
            <li>size: 41,42,43,44</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
          <Button variant="contained" endIcon={<BeenhereIcon />}>
        <Link href="/Product" >buy</Link>
        </Button>
          </div>
        </div>
      </div> */}