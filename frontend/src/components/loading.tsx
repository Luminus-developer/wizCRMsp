import Box from '@mui/material/Box';
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
                backgroundColor:'gray',
                opacity:0.6
            }}>

            <Box width='100%' height='100%'
                            sx={{
                                border: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>

                    <Box
                        sx={{
                            border: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <ColorRing
                            visible={true}
                            height="50"
                            width="50"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </Box>
                </Box>
        </Box>
    );
}

export default Loading;