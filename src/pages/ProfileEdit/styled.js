import styled from 'styled-components';

const Container = styled.div`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    width: 100%;


    .container-profile-edit{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 40px;

        height: 100vh;

        h1{
            color: #444955;
            font-size: 22px;
            padding: 26px;
        }

        form{
            width: 30%;
            display: flex;
            flex-direction: column;
            gap: 15px;
        

        .avatar{

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            input{
                border: 1px solid #DADADA;
                border-radius: 2px;

                padding: 8px;

                color: #444955;

            }

            input:focus{
                outline: none;
            }


           span {
             font-size: 80px;
             color: #444955;
           }
        }

        .inputs {
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 10px;

            color: #444955;
            font-weight: bold;

            span{
                font-size: 12px;
                font-weight: normal;
                font-style: italic;
            }

            input{
                border: none;
                border-bottom: 1.5px solid #ccc;
                padding: 8px;
                color: #444955;

                margin-top: 8px;
            }

            input:focus{
                outline: none;
            }

            textarea{
                color: #444955;
                padding: 8px;

            }

        }
        button {
            padding: 7px 11px;

            border: none;

            background-color: #2fc18c;
            color: #fff;
            transition: 0.3s;
            }

            button:hover{
                background-color: #036B52;
                cursor: pointer;
            }

    }
`;

export default Container;
