import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Trending = () => {
    return (
        <>
            <div className='py-10 flex container mx-auto'>
                <div className='flex gap-x-[50px]'>
                    <div className='max-w-[45%]'>
                        <h2 className='text-[32px] font-black'>What’s Trending?</h2>
                        <p className='pt-8 text-[1.2rem]'>Introducing the Ethereal Bloom Bridal Makeup Collection by where every brushstroke and strand is an ode to the magic within you. Whether you're a bride who shines with sophistication, or a free-spirited soul who wants to express bold confidence, Ethereal Bloom is designed to capture your vision.</p>
                        <p className='pt-3 text-[1.2rem]'>Inspired by you and crafted by us, Ethereal Bloom is where elegance meets ethereal.</p>
                        <p className='pt-3 text-[1.2rem]'>Check out our complete  <span>Ethereal Bloom Bridal </span> Collection.</p>
                        <Box sx={{ '& button': { m: 1 } }} className='mt-5'>
                            <div>
                                <Button variant="contained" size="large" sx={{ width: '150px',  backgroundColor: '#EB212E',  fontWeight:700,  transition: 'transform 0.5s', 
                                        '&:hover': { transform: 'scale(1.1)',
                                            backgroundColor: 'white',
                                            color:'#EB212E',
                                            fontWeight:700, 
                                            border:'1px solid #EB212E',
                                        },
                                    }}> READ ME </Button>
                            </div>
                        </Box>
                    </div>
                    <div className='w-[70%]'>
                        <img src="asset 13.jpeg" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Trending
