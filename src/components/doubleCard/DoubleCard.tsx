import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import scss from "./DoubleCard.module.scss";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LuggageIcon from '@mui/icons-material/Luggage';
import { useAppSelector } from '../../hook';

const DoubleCard: React.FC = () => {
    const tickets = useAppSelector(state => state.tickets)

    const data = [
        {
            fromCity: tickets.from,
            toCity: tickets.where,
            date: tickets.flyDate
        },
        {
            fromCity: tickets.where,
            toCity: tickets.from,
            date: tickets.becomeDate
        }
    ]
    return (
        <div className={scss.container}>
            <div className={scss.wrapper}>
                {
                    data.map((item) => (
                        <Grid sx={{
                            display: 'flex',
                            width: '100%',
                            height: '50%',
                        }}>
                            <Grid sx={{
                                width: '20%',
                            }}>
                                <Grid sx={{
                                    height: '100%',
                                }} >
                                    <Grid sx={{
                                        backgroundColor: '#8BA5D8',
                                        width: '95%',
                                        height: '4vh',
                                        borderRadius: '20px 0px 20px 0px',
                                        color: 'white',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Typography component="p" sx={{
                                            fontSize: '15px',
                                            '@media(max-width: 1200px)': {
                                                fontSize: '12px',
                                            },
                                            '@media(max-width: 935px)': {
                                                fontSize: '10px',
                                            },
                                            '@media(max-width: 805px)': {
                                                fontSize: '8px',
                                            },
                                        }}>
                                            Невозвратный
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{
                                        marginTop: '25px'
                                    }}>
                                        <Grid sx={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            <img src='/images/logo.png' alt="logo" />
                                        </Grid>
                                        <Typography component="p" sx={{
                                            fontSize: '18px',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            S7 Airlines
                                        </Typography>

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid sx={{
                                width: '80%',
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: 'center',
                                marginTop: '0px',
                                height: "100%",
                                borderTop: '1px dashed #B7BAC1',
                            }}>
                                <Grid sx={{
                                    width: '100%',
                                    display: "flex",
                                    alignItems: 'center',
                                    justifyContent: "space-around",
                                    height: "25vh"
                                }}>
                                    <Box>
                                        <Typography component="p" sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            padding: '0'
                                        }}>
                                            10:20
                                        </Typography>
                                        <Box sx={{
                                            marginBottom: '30px'
                                        }}>
                                            <Typography component="p" sx={{
                                                fontSize: '15px',
                                            }}>
                                                {item.fromCity}
                                            </Typography><Typography component="p" sx={{
                                                fontSize: '15px',
                                                marginTop: '-5px'
                                            }}>
                                                {item.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        width: "40%",
                                        marginTop: '10%'
                                    }}>
                                        <Box sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}>
                                            <Typography component="p" sx={{
                                                fontSize: '15px',
                                                color: '#B7BAC1'
                                            }}>
                                                SVO
                                            </Typography><Typography component="p" sx={{
                                                fontSize: '15px',
                                                color: '#B7BAC1'
                                            }}>
                                                ROV
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            marginBottom: '30px',
                                            height: "15vh",
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "column"
                                        }}>
                                            <Box sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                width: "90%",
                                                alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    background: "#B7BAC1",
                                                    padding: "3px 3px",
                                                    borderRadius: "100px"
                                                }}></Box>
                                                <Box sx={{
                                                    background: "#B7BAC1",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    width: "100%",
                                                    height: "1px"
                                                }}></Box>
                                                <Box sx={{
                                                    background: "#B7BAC1",
                                                    padding: "3px 3px",
                                                    borderRadius: "100px"


                                                }}></Box>
                                            </Box>
                                            <Typography component="p" sx={{
                                                fontSize: '15px',
                                                width: "100%",
                                                textAlign: "center",
                                                paddingTop: "10px",
                                                color: "#B7BAC1"

                                            }}>
                                                В пути 1ч 55 мин
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography component="p" sx={{
                                            fontSize: '25px',
                                            fontWeight: 'bold',
                                            padding: '0'
                                        }}>
                                            12:05
                                        </Typography>
                                        <Box sx={{
                                            marginBottom: '30px'
                                        }}>
                                            <Typography component="p" sx={{
                                                fontSize: '15px',
                                            }}>
                                                {item.toCity}
                                            </Typography><Typography component="p" sx={{
                                                fontSize: '15px',
                                                marginTop: '-5px'
                                            }}>
                                                {item.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <ShoppingBagIcon color="primary" />
                                        <LuggageIcon color="primary" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </div>
            <Grid sx={{
                width: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderLeft: '1px solid  #DDE3EE'

            }}>
                <Typography component='h1' variant='h1' sx={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    '@media(max-width: 805px)': {
                        fontSize: '20px',
                        fontWeight: 'bold'
                    },
                    '@media(max-width: 430px)': {
                        fontSize: '15px',
                        fontWeight: 'bold'
                    },
                }}>9 300 ₽</Typography>
            </Grid>
        </div >
    )
}

export default DoubleCard;