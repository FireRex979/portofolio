import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    identifyContainer: {
        margin: '60px 0',
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 280px)'
    },
    identify: {
        width: '50%',
        '& h2': {
            fontSize: '2.5rem',
            color: '#54BAB9',
            fontWeight: '500',
            '& span': {
                color: '#000',
                fontWeight: '700',
            }
        },
        '& .identifyInfo': {
            marginTop: '20px',
            '& p': {
                fontSize: '1.2rem',
                color: '#000',
                fontWeight: '500',
                lineHeight: '1.5',
            }
        },
    },
    contactMe: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginTop: '40px',
    },
    socialMediaContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginRight: '20px',
        gap: '20px',
        '& a': {
            color: '#6E85B7',
            fontSize: '1.5rem',
            textDecoration: 'none',
            '&:hover': {
                color: '#54BAB9',
            }
        }
    },
    buttonHire: {
        backgroundColor: '#54BAB9',
        color: '#fff',
        padding: '10px 20px',
        fontFamily: 'Poppins, sans-serif',
        border: 'none',
        borderRadius: '0px',
        fontSize: '1.2rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#8EC3B0',
            color: '#fff',
        }
    },
    fotoProfileContainer: {
        width: '50%',
        '& img': {
            width: '100%',
        }
    },
    '@media (max-width: 680px)': {
        identifyContainer: {
            margin: '20px 0',
            display: 'block',
            minHeight: 'unset'
        },
        identify: {
            width: '100%',
            '& h2': {
                fontSize: '1.8rem',
                textAlign: 'center',
            },
            '& .identifyInfo': {
                marginTop: '10px',
                '& p': {
                    fontSize: '1.2rem',
                    lineHeight: '1.5',
                    textAlign: 'center',
                }
            },
        },
        contactMe: {
            display: 'block',
            textAlign: 'center',
            marginTop: '20px',
        },
        socialMediaContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '0',
            marginBottom: '20px',
            gap: '20px',
            '& a': {
                color: '#6E85B7',
                fontSize: '1.5rem',
                textDecoration: 'none',
                '&:hover': {
                    color: '#54BAB9',
                }
            }
        },
        fotoProfileContainer: {
            width: '100%',
            '& img': {
                width: '100%',
            }
        },
    }
});

export default useStyles;