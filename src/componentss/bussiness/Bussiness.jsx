import React from 'react'
import './bussiness.css'
function Bussiness() {

    const dataGrid=[{
        content:"TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
        title:"Sherl Berge",
        position:"CEO at Lynch LLC",
        image:'https://img.freepik.com/photos-premium/young-african-american-woman-smiling-and-wearing-white-tshirt-on-turquoise-background_719646-2691.jpg?w=360',
        height:'auto'
    },
    {
        content:"The best part about TaxPal is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        title:"Sherl Berge",
        position:"CEO at Lynch LLC",
        image:'https://img.freepik.com/photos-premium/young-african-american-woman-smiling-and-wearing-white-tshirt-on-turquoise-background_719646-2691.jpg?w=360',
        height:'400px'
    },
    {
        content:"TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
        title:"Sherl Berge",
        position:"CEO at Lynch LLC",
        image:'https://img.freepik.com/photos-premium/young-african-american-woman-smiling-and-wearing-white-tshirt-on-turquoise-background_719646-2691.jpg?w=360',
        height:'auto'
    },
    {
        content:"TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
        title:"Sherl Berge",
        position:"CEO at Lynch LLC",
        image:'https://img.freepik.com/photos-premium/young-african-american-woman-smiling-and-wearing-white-tshirt-on-turquoise-background_719646-2691.jpg?w=360',
        height:'auto'
    },
    {
        content:"TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
        title:"Sherl Berge",
        position:"CEO at Lynch LLC",
        image:'https://img.freepik.com/photos-premium/young-african-american-woman-smiling-and-wearing-white-tshirt-on-turquoise-background_719646-2691.jpg?w=360',
        height:'auto'
    },
    {
        content:"TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
        title:"Sherl Berge",
        position:"CEO at Lynch LLC",
        image:'https://img.freepik.com/photos-premium/young-african-american-woman-smiling-and-wearing-white-tshirt-on-turquoise-background_719646-2691.jpg?w=360',
        height:'auto'
    },
]
  return (
    <div className='bussiness'>
 <div style={{width:'100%',height:'65vh',marginTop:'91px',textAlign:'center',color:'black'   }}>
        <h1 style={{fontSize:'30px',color:'black',fontWeight:500}}>Loved by business worldwide</h1>
        <p  style={{fontSize:'18px',color:'black',position:'relative',top:'20px'}}>Our software is so simple that people can't help but fall in love with it. Simplicity</p>
        <p  style={{fontSize:'18px',color:'black',position:'relative',top:'30px'}}>is easy when you just skip tons of mission-critical features.</p>
    </div>
    <div className='bussiness__content'>
         {
            dataGrid.map((itm,idx)=>(
                <div style={{padding:'18px',width:'350px',boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",borderRadius:'10px'}}>
<p>{itm.content}</p>
<div style={{display:'flex',justifyContent:'space-between',marginTop:'40px'}}>
    <div>
        <p>{itm.title}</p>
        <p>{itm.position}</p>
    </div>
    <img src={itm.image} alt='name' style={{width:'40px',height:'40px',borderRadius:'50%'}}/>
</div>
                </div>

            ))
         }
    </div>
    
        </div>
  )
}

export default Bussiness