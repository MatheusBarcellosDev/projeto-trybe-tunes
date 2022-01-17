import styled from 'styled-components';

const Container = styled.div`

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    width: 100%;
    

    .container-profile{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 80px;

        height: 100vh;

        .container-infos{
            border: 1px solid #DADADA;
            border-radius: 10px;
            box-shadow: 0px 0px 10px #DADADA;
            padding: 40px;
            

            width: 35%;

            .img-profile{
                display: flex;
                align-items: center;
                justify-content: space-around;
                gap: 15px;

                margin-bottom: 35px;

                img{
                    width: 100px;
                    border-radius: 50%;
                }

                a{
                    padding: 11px 13px;
                    margin-left: 10px;
                    text-decoration: none;
                    border: none;

                    background-color: #2fc18c;
                    color: #fff;
                    transition: 0.3s;
                    border-radius: 5px;
                }

                a:hover{
                    background-color: #036B52;
                    cursor: pointer;
                }
            }

            .infos-profile{
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 20px;

                word-break: break-all;

                span{
                    font-size: 18px;
                    color: #444955;
                    font-weight: bold;
                }

                p{
                    font-size: 15px;
                    color: #444955;
                    font-weight: normal;
                    
                    margin-top: 5px;
                    width: 75%;
                }
            }
            
        }
    }

`;

export default Container;
