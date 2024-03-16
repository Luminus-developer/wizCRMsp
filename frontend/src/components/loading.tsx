import Box from '@mui/material/Box';
import zIndex from '@mui/material/styles/zIndex';
import { ColorRing } from 'react-loader-spinner';

function Loading() {
    return (
        <Box
            sx={{
                border:0,
                position:'fixed',
                bottom:0,
                left:0,
                right:0,
                top:0,
                zIndex:1,
                backgroundColor:'lightgrey',
                opacity:0.3
            }}>
            <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </Box>
    );
}

export default Loading;