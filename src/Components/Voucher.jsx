import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export  function Voucher() {
    const navigate = useNavigate()
  return (
    <>

    <h2 style={{textAlign:"center"}}>Fee Voucher
    </h2>
    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 1
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 500
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 6000
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card><br />

    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 2        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 600
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 7200
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card><br />


    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 3
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 700
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 8400
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card><br />


    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 4
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 800
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 9600
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card><br />

    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 5
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 900
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 10800
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card><br />

    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 6
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 1000
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 12000
        </Typography>

        </div>
        
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card><br />

    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 7
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 1100
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 13200
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card> <br />

    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 8
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 1200
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 14400
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card>

    <br />

    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 9
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 1300
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 15600
        </Typography>

        </div>
        <br />
        <Button  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card><br />

    <Card sx={{ maxWidth: 945, maxHeight:200 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fee Voucher - Class 10
        </Typography>
        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Monthly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 1400
        </Typography>

        </div>

        <div style={{display:"flex" , justifyContent:"space-between", color:"black"}}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
         Yearly Fee
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Rs 16800
        </Typography>

        </div>
        <br />
        <Button onClick={()=>navigate("/payment")}  style={{backgroundColor:"green",color:"white", textAlign:"center"}} size="small">Pay Now</Button>
      </CardContent>
      
    </Card>

    

    </>
  );
}

export default Voucher