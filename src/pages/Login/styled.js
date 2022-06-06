import styled from 'styled-components';

const Container = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    max-width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 40px;

    .img-logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-logo img{
        width: 75%;
    }

    form{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        border-radius: 10px;

        width: 35%;

        min-width: 300px;
        min-height: 250px;


        label{
            width: 50%;
            display: flex;
            flex-direction: column;
            
            gap: 16px;
        }


        input{
            width: 100%;
            padding: 12px 16px 12px 16px;
            border: none;

            border-bottom: 1.3px solid #ccc;

            text-align: center;

            color: #444955;
            font-weight: bold;
            font-size: 16px;
        }

        input:focus{
            outline: none;
        }

        input::placeholder{

            font-weight: bold;
        }

        button{
            width: 100%;
            padding: 8px 32px 8px 32px;

            border: none;

            background-color: #2fc18c;
            color: #fff;
            transition: 0.3s;
            
        }

        button:hover{
            background-color: #2fc14c;
            cursor: pointer;
        }
    }

`;

export default Container;
