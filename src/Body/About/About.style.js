import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    aboutContainer: {
        margin: '30px 0',
        minHeight: 'calc(100vh - 220px)',
        padding: '0 20%',
    },
    aboutContent: {
        '& .aboutTitle': {
            fontSize: '1.8rem',
            color: '#54BAB9',
            fontWeight: '700',
            marginBottom: '20px',
        },
        '& .aboutInfo': {
            fontSize: '1.1rem',
            color: '#000',
            fontWeight: '500',
            lineHeight: '1.5',
        }
    }
});

export default useStyles;