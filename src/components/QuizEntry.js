// QuizEntry.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

const QuizEntry = () => {
    const [quizCode, setQuizCode] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setQuizCode(event.target.value);
    };

    const handleQuizEnter = () => {
        // log till backend in implemented
        console.log(quizCode);
        navigate('/quiz');
    };

    const handleQuizCreate = () => {
        navigate('/edit');
    };

    return (
        <Container>
            <Box display="flex" justifyContent="flex-end" m={2}>
                <Button variant="outlined" onClick={handleQuizCreate}>Create Quiz</Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>
                <Typography variant="h4" component="h1" gutterBottom>Enter Quiz Code</Typography>
                <TextField
                    variant="outlined"
                    value={quizCode}
                    onChange={handleInputChange}
                    placeholder="Enter Quiz Code Here"
                    style={{ marginBottom: '20px' }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            handleQuizEnter();
                        }
                    }}
                />
                <Button variant="contained" color="primary" onClick={handleQuizEnter}>Enter</Button>
            </Box>
        </Container>
    );
}

export default QuizEntry;
