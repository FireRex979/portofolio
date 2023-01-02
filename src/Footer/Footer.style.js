import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    footer: {
        width: '100%',
        display: 'block',
        borderTop: '1px solid #ccc',
    },
    footerLinkContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .footerDescription': {
            width: '30%',
            '& p': {
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#6E85B7',
            }
        },
        '& .linkFooter': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            '& p': {
                color: '#B2C8DF',
                fontSize: '16px',
                textDecoration: 'none',
                '& span': {
                    color: '#6E85B7',
                    fontWeight: 'bold',
                }
            }
        },
    },
    '@media (max-width: 680px)': {
        footerLinkContainer: {
            display: 'block',
            '& .footerDescription': {
                width: '100%',
                '& p': {
                    fontSize: '14px',
                    textAlign: 'center',
                }
            },
            '& .linkFooter': {
                display: 'block',
                textAlign: 'center',
            }
        }
    }
})

export default useStyles;