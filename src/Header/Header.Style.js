import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    header: {
        margin: '0',
        borderBottom: '1px solid #E0E0E0'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: '40px',
        padding: '12px 0',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        '& h4': {
            color: '#6E85B7',
            fontSize: '24px',
        },
        '& span': {
            color: '#B2C8DF',
            fontSize: '32px',
            marginLeft: '5px'
        }
    },
    navMenu: {
        display: 'flex',
        alignItems: 'center',
        '& ul': {
            display: 'flex',
            alignItems: 'center',
            '& li': {
                listStyle: 'none',
                marginLeft: '20px',
                '& a': {
                    color: '#6E85B7',
                    fontSize: '16px',
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#B2C8DF',
                    }
                }
            },
        },
        '& button': {
            display: 'none',
        }
    },
    '@media (max-width: 680px)': {
        navbar: {
            height: '40px',
            padding: '4px 0px'
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            '& h4': {
                color: '#6E85B7',
                fontSize: '16px',
            },
            '& span': {
                color: '#B2C8DF',
                fontSize: '24px',
                marginLeft: '5px'
            }
        },
        navMenu: {
            display: 'block',
            '& ul': {
                display: 'none',
                backgroundColor: '#FFF',
                padding: '0px 16px',
                '& li': {
                    listStyle: 'none',
                    marginLeft: '0',
                    textAlign: 'right',
                    '& a': {
                        color: '#6E85B7',
                        fontSize: '14px',
                        textDecoration: 'none',
                        '&:hover': {
                            color: '#B2C8DF',
                        }
                    }
                }
            },
            '& button': {
                display: 'block',
                backgroundColor: '#FFF',
                border: 'none',
                color: '#6E85B7',
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                    color: '#B2C8DF',
                    backgroundColor: '#FFF',
                },
                '& span': {
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#6E85B7',
                    margin: '4px 0px',
                }
            }
        },
    }
});

export default useStyles;