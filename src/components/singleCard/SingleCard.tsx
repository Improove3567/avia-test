import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import scss from "./SingleCard.module.scss";
import { useAppSelector } from '../../hook';

const SingleCard: React.FC = () => {
    const tickets = useAppSelector(state => state.tickets)
    const [firstBtn, setFirstBtn] = useState(false);
    const [secondBtn, setSecondBtn] = useState(false);
    const [thirdBtn, setThirdBtn] = useState(false);

    const [fromTime, setFromTime] = useState('9:20')
    const [toTime, setToTime] = useState('11:05')

    const handleFirstBtn = () => {
        setFirstBtn(!firstBtn)
        setSecondBtn(false)
        setThirdBtn(false)
        setFromTime('09:20')
        setToTime('11:05')
    }

    const handleSecondBtn = () => {
        setSecondBtn(!secondBtn)
        setFirstBtn(false)
        setThirdBtn(false)
        setFromTime('10:20')
        setToTime('12:05')
    }

    const handleThirdBtn = () => {
        setThirdBtn(!thirdBtn)
        setSecondBtn(false)
        setFirstBtn(false)
        setFromTime('11:20')
        setToTime('13:05')
    }


    return (
        <div className={scss.container}>
            <Grid sx={{
                width: '20%',
            }}>
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
                        <img src='/images/logo.png' alt="pizda" />
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
            <Grid sx={{
                width: '80%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%"
            }}>
                <Grid sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    height: "15vh"
                }}>
                    <Box>
                        <Typography component="p" sx={{
                            fontSize: '25px',
                            padding: '0'
                        }}>
                            {fromTime}
                        </Typography>
                        <Box sx={{
                            marginBottom: '30px'
                        }}>
                            <Typography component="p" sx={{
                                fontSize: '15px',
                                fontWeight: '500'
                            }}>
                                {tickets.from}
                            </Typography><Typography component="p" sx={{
                                fontSize: '15px',
                                fontWeight: '500',
                                marginTop: '-5px'
                            }}>
                                {tickets.flyDate}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "40%",

                    }}>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between"
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
                        }}>
                            {toTime}
                        </Typography>
                        <Box sx={{
                            marginBottom: '30px'
                        }}>
                            <Typography component="p" sx={{
                                fontSize: '15px',
                                fontWeight: '500'
                            }}>
                                {tickets.where}
                            </Typography><Typography component="p" sx={{
                                fontSize: '15px',
                                fontWeight: '500',
                                marginTop: '-5px'
                            }}>
                                {tickets.flyDate}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <img src='/images/сумка.png' alt='bag_logo' className={scss.icons} />
                        <img src='/images/багаж.png' alt='bag_logo' className={scss.icons} />
                    </Box>
                </Grid>
                <Grid sx={{

                }}>
                    <button className={firstBtn ? scss.timeBtnActive : scss.timeBtn} onClick={handleFirstBtn}>
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
                            09:20 - 11:05
                        </Typography>
                    </button>
                    <button className={secondBtn ? scss.timeBtnActive : scss.timeBtn} onClick={handleSecondBtn}>
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
                            10:20 - 12:05
                        </Typography>
                    </button>
                    <button className={thirdBtn ? scss.timeBtnActive : scss.timeBtn} onClick={handleThirdBtn}>
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
                            11:20 - 13:05
                        </Typography>
                    </button>
                </Grid>
            </Grid>
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
                }}>4 150 ₽</Typography>
            </Grid>
        </div >
    )
}

export default SingleCard;