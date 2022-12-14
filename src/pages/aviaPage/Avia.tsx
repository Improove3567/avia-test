import { Button, FormControl, FormHelperText, Grid, OutlinedInput, TextField, TextFieldProps, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import scss from "./Avia.module.scss"
import { useAppDispatch } from '../../hook';
import { addTicket } from '../../store/slice';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Dayjs } from 'dayjs';

const Avia: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [becomeValue, setBecomeValue] = useState<string | null>(null);
    const [flyValue, setFlyValue] = useState<string | null>(null);
    const [fromInput, setFromInput] = useState<string>('');
    const [whereInput, setWhereInput] = useState<string>('');

    const [flyDirty, setFlyDirty] = useState<boolean>(false);
    const [fromDirty, setFromDirty] = useState<boolean>(false);
    const [whereDirty, setWhereDirty] = useState<boolean>(false);

    const [flyError, setFlyError] = useState<string>('Это поле обязательна');
    const [fromError, setFromError] = useState<string>('Это поле обязательна');
    const [whereError, setWhereError] = useState<string>('Это поле обязательна');
    let str = '2022-11-22T00:00:00+06:00';
    let Arrstr = str.split('T')
    console.log(Arrstr[0]);

    const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>): void => {
        switch (e.target.name) {
            case 'from':
                setFromDirty(true)
                break
            case 'where':
                setWhereDirty(true)
                break
            case 'fly':
                setFlyDirty(true)
                break
        }
    }

    const fromHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFromInput(event.target.value)
        const regex = (/^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/);
        if (!regex.test(event.target.value)) {
            setFromError('Некоректное название')
            setFromInput('')
        } else {
            setFromError("")
        }
    }

    const whereHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWhereInput(event.target.value)
        const regex = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
        if (!regex.test(event.target.value)) {
            setWhereError('Некоректное название')
            setWhereInput('')
        } else {
            setWhereError("")
        }
    }

    const submit = () => {
        dispatch(addTicket({ from: fromInput, where: whereInput, flyDate: flyValue, becomeDate: becomeValue }))
        navigate('/avia-card')
    }

    const handleFlyBlur = () => {
        setFlyDirty(true)
    }

    return (
        <>
            <Grid sx={{
                width: '80%',
                height: '20vh',
                margin: '0 auto',
                backgroundColor: '#5C87DB',
                borderRadius: '40px 40px 0px 0px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '15px',
                paddingRight: '15px'
            }}>
                <FormControl sx={{ m: 1, width: '23%' }} variant="outlined">
                    <FormHelperText id="outlined-weight-helper-text" sx={{ color: 'white' }}>Откуда</FormHelperText>
                    <OutlinedInput
                        name='from'
                        placeholder='Город вылета'
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            backgroundColor: 'white'
                        }}
                        onChange={fromHandleChange}
                        onBlur={(e) => blurHandler(e)}
                    />
                    <Grid sx={{
                        height: '20px'
                    }}>
                        {(fromDirty && fromError) && <Typography component="p" sx={{
                            color: '#FF2C2C',
                            '@media(max-width: 950px)': {
                                fontSize: '15px',
                                width: '100%',
                            },
                            '@media(max-width: 894px)': {
                                fontSize: '12px',
                                width: '100%',
                            },
                            '@media(max-width: 723px)': {
                                fontSize: '10px',
                            }
                        }}>{fromError}</Typography>}
                    </Grid>
                </FormControl>
                <FormControl sx={{ m: 1, width: '23%' }} variant="outlined">
                    <FormHelperText id="outlined-weight-helper-text" sx={{ color: 'white' }}>Куда</FormHelperText>
                    <OutlinedInput
                        name='where'
                        placeholder='Город прилёта'
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            backgroundColor: 'white'
                        }}
                        onChange={whereHandleChange}
                        onBlur={(e) => blurHandler(e)}
                    />
                    <Grid sx={{
                        height: '20px'
                    }}>
                        {(whereDirty && whereError) && <Typography component="p" sx={{
                            color: '#FF2C2C',
                            '@media(max-width: 950px)': {
                                fontSize: '15px',
                                width: '100%',
                            },
                            '@media(max-width: 894px)': {
                                fontSize: '12px',
                                width: '100%',
                            },
                            '@media(max-width: 723px)': {
                                fontSize: '10px',
                            }
                        }}>{whereError}</Typography>}
                    </Grid>
                </FormControl>
                <Grid sx={{
                    width: '23%'
                }}>
                    <FormHelperText id="outlined-weight-helper-text" sx={{ color: 'white' }}>Туда</FormHelperText>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className={scss.date__picker}
                            value={flyValue}
                            onChange={(newValue: Dayjs | null | string) => {
                                newValue = newValue as Dayjs
                                const date = newValue?.format()
                                const concateDate = date.split('T')
                                setFlyValue(concateDate[0])
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            InputProps={{
                                onBlur: handleFlyBlur
                            }}
                        />
                        <Grid sx={{
                            height: '20px'
                        }}>
                            {(flyDirty && flyError) && <Typography component="p" sx={{
                                color: '#FF2C2C',
                                '@media(max-width: 950px)': {
                                    fontSize: '15px',
                                    width: '100%',
                                },
                                '@media(max-width: 894px)': {
                                    fontSize: '12px',
                                    width: '100%',
                                },
                                '@media(max-width: 723px)': {
                                    fontSize: '10px',
                                }
                            }}>{flyError}</Typography>}
                        </Grid>
                    </LocalizationProvider>
                </Grid>
                <Grid sx={{
                    width: '23%'
                }}>
                    <FormHelperText id="outlined-weight-helper-text" sx={{ color: 'white' }}>Обратно</FormHelperText>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className={scss.date__picker}
                            value={becomeValue}
                            onChange={(newValue: Dayjs | null | string) => {
                                newValue = newValue as Dayjs
                                const date = newValue?.format()
                                const concateDate = date.split('T')
                                setBecomeValue(concateDate[0])
                            }}
                            renderInput={(params: TextFieldProps) => <TextField {...params} />}
                        />
                        <Grid sx={{
                            height: '20px'
                        }}>
                        </Grid>
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Grid sx={{
                width: '80%',
                height: '10vh',
                margin: '0 auto',
                backgroundColor: 'white',
                borderRadius: '0px 0px 40px 40px',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                boxShadow: '5px 5px 5px gray',
            }}>
                {
                    flyValue && fromInput && whereInput ? (
                        <Button variant="contained" disableElevation sx={{
                            width: '15%',
                            height: '40px',
                            marginRight: '15px',
                            borderRadius: '10px',
                            color: 'white',
                            alignItems: 'center'
                        }}
                            onClick={() => submit()}
                        >
                            <Typography component="p" sx={{
                                textDecoration: 'none',
                                color: 'white',
                                '@media(max-width: 1216px)': {
                                    fontSize: '12px',
                                },

                            }}>
                                Найти Билет
                            </Typography>
                        </Button>
                    ) : (
                        <Button variant="contained" disabled disableElevation sx={{
                            width: '15%',
                            height: '40px',
                            marginRight: '15px',
                            borderRadius: '10px',
                            color: 'white',
                            alignItems: 'center',
                            '@media(max-width: 980px)': {
                                width: '20%',
                            },
                        }}
                            onClick={() => submit()}
                        >
                            <Typography component="p" sx={{
                                textDecoration: 'none',
                                color: 'white',
                                '@media(max-width: 1216px)': {
                                    fontSize: '12px',
                                },
                                '@media(max-width: 980px)': {
                                    fontSize: '10px',
                                },
                                '@media(max-width: 645px)': {
                                    fontSize: '7px',
                                },
                            }}>
                                Найти Билет
                            </Typography>
                        </Button>
                    )
                }
            </Grid>
        </>
    )
}

export default Avia;